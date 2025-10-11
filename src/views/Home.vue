<template>
    <v-main class="content" style="height: 100vh">
        <v-container fluid class="mx-auto" style="max-width: 95%;">

            <!-- Linha 1: Select -->
            <v-row class="ma-1" justify="center" align="center">
                <!-- Limit per page -->
                <v-col cols="12" sm="6" md="2" class="pa-1">
                    <v-select v-model="limit" :items="[1, 2, 3, 50, 100]"
                        label="Itens por página" variant="outlined" 
                        density="compact" hide-details/>
                </v-col>

                <!-- Select state -->
                <v-col cols="12" sm="6" md="2" class="pa-1">
                    <v-select v-model="selectedState" label="Estados" variant="outlined"
                    :items="states.map(e => e.sigla)"
                    density="compact" chips
                    :menu-props="{maxHeight: 200 }"  hide-details/>
                </v-col>

                <!-- Select cities -->
                <v-col cols="12" sm="6" md="3" class="pa-1">
                    <v-select v-model="filters.cities" label="Cidades" variant="outlined"
                    :items="cities"
                    multiple density="compact" chips :disabled="!selectedState"
                    :menu-props="{maxHeight: 200 }" hide-details/>
                </v-col>

                <!-- Select Animals -->
                <v-col cols="12" sm="6" md="3" class="pa-1">
                    <v-select v-model="filters.animals" label="Animais" variant="outlined"
                    :items="animalItems"
                    multiple density="compact" chips
                    :menu-props="{maxHeight: 200 }" hide-details/>
                </v-col>

                <!-- Filter and Clean Filter Button -->
                <v-col cols="6" sm="6" md="4" class="d-flex justify-center align-center">
                    <v-btn @click="getOngs" text class="text-teal me-2" rounded="lg" variant="elevated">
                        Filtrar
                    </v-btn>
                    <v-btn @click="clearFilters" text class="text-teal" rounded="lg" variant="elevated">
                        Limpar Filtro
                    </v-btn>
                </v-col>

            </v-row>

            <!-- Linha 2: Cards -->
            <v-row justify="center">
                <v-col justify="center"
                v-for="ong in ongs" :key="ong.id" cols="6" sm="6" md="3" lg="2" >
                    <v-card max-width="100%"  justify="center"
                    :to="{ name: 'OngById', params: { id: ong.id } }"
                    router :ripple="false">
                        <v-img max-height="200px" class="align-end text-white"
                        :src="headerAnimal">
                            <v-card-title class="name-ong-img">{{ ong.name }}</v-card-title>
                        </v-img>

                        <v-card-actions>
                            <v-btn color="orange-lighten-2" text="Explore" />
                        </v-card-actions>

                    </v-card>
                </v-col>
            </v-row>

            <!-- Linha 3: Paginação -->
            <v-row justify="center">
                <v-col>
                    <v-pagination v-model="page" :length="totalPages" />
                </v-col>
            </v-row>

        </v-container>
    </v-main>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue'
    import axios from 'axios'
    import { useRouter, useRoute } from 'vue-router'
    import { baseApiUrl } from './../global.js'
    import headerAnimal from './../assets/imgLogoDefault.png'
    import animalsData from './../assets/data/animals.json'

    const ongs = ref([])

    const page = ref(1)
    var limit = ref(1)
    const totalPages = ref(1)

    const filters = ref({
        animals: [],
        state: '',
        cities: []
    })
    
    const animalItems = animalsData.animals;
    
    const states = ref([])
    const cities = ref([])

    const selectedState = ref('')

    const router = useRouter()
    const route = useRoute()

    async function getOngs() {
        try {
            const res = await axios.get(`${baseApiUrl}/ongs`,{
                params:{
                    page: page.value,
                    limit: limit.value,
                    animals: filters.value.animals,
                    cities: filters.value.cities,
                    state: filters.value.state
                },
                paramsSerializer: params => {
                    return new URLSearchParams(params).toString()
                }
            })
            ongs.value = res.data.data;
            totalPages.value = res.data.totalPages;
        } 
        catch (err) {
            console.error("Erro ao buscar ONGs:", err)
        }
    }

    async function clearFilters() {
        filters.value = {
            animals: [],
            cities: [],
            state: ''
        };

        selectedState.value = '';

        page.value = 1;
        await getOngs();
    }

    async function getStates() {
        const res = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        states.value = res.data.sort((a, b) => a.nome.localeCompare(b.nome))
    }

    async function getCities(uf) {
        const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        cities.value = res.data.map(c => c.nome)
    }

    onMounted(async() => {
        await getStates();
        
        const q = route.query
        if (q.page) page.value = Number(q.page)
        if (q.limit) limit.value = Number(q.limit)
        if (q.animals) filters.value.animals = Array.isArray(q.animals) ? q.animals : [q.animals]
        if (q.state){
            const state = states.value.find(s => s.nome === q.state);
            filters.value.state = state ? state.nome : '';

            selectedState.value = state ? state.sigla : '';
        }
        if (q.cities) filters.value.cities = Array.isArray(q.cities) ? q.cities : [q.cities]

        getOngs();
    })

    watch([limit], () => {
        page.value = 1  // Reseta a página para 1 quando o limite mudar
        getOngs()  // Chama a função para buscar os dados
    })

    watch([page], () => {
        getOngs()
    })

    watch(selectedState, async (uf) => {
        if (uf) { 
            const state = states.value.find(s => s.sigla === uf);
            filters.value.state = state ? state.nome : '';
            
            filters.value.cities = []
            await getCities(uf)
        } 
        else {
            cities.value = [];
            filters.value.state = '';
            filters.value.cities = [];
        }
    })


    watch([filters, limit, page], () => {
    router.replace({
        name: 'Home',
        query: {
        page: page.value,
        limit: limit.value,
        animals: filters.value.animals,
        state: filters.value.state,
        cities: filters.value.cities
        }
    })
    }, { deep: true })
</script>

<style scoped>
    .ongs-container {
        display: flex;
        flex-wrap: wrap; /* permite quebrar linha */
        gap: 16px;       /* espaço entre os cards */
    }

    .name-ong-img {
        position: absolute;
        bottom: 0;                /* encosta na parte de baixo */
        left: 0;                  /* opcional: alinhar à esquerda */

        padding: 0 8px;
        border-top-right-radius: 10px;
        background-color: rgba(255, 255, 255, 0.666) !important;
        backdrop-filter: blur(2px);
        color: teal;
        font-weight: bold;
    }

</style>