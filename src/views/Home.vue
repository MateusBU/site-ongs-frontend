<template>
    <v-main class="content" style="height: 100vh">
        <v-container fluid class="mx-auto" style="max-width: 95%;">

            <!-- Linha 1: Select -->
            <v-row class="mb-4" justify="center">
                <v-col cols="12" sm="6" md="4">
                    <v-select v-model="limit" :items="[1, 2, 3, 50, 100]"
                        label="Itens por página" variant="outlined" 
                        density="compact" />
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
                        :src="headerAnimal" containc>
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
    import { baseApiUrl } from './../global.js'
    import headerAnimal from './../assets/imgLogoDefault.png'

    const ongs = ref([])

    const page = ref(1)
    var limit = ref(1)
    const totalPages = ref(1)

    async function getOngs() {
        try {
            const res = await axios.get(`${baseApiUrl}/ongs`,{
                params:{page: page.value, limit: limit.value}
            })
            ongs.value = res.data.data;      
            console.log(ongs.value)
            totalPages.value = res.data.totalPages;
        } 
        catch (err) {
            console.error("Erro ao buscar ONGs:", err)
        }
    }

    onMounted(() => {
        getOngs()
    })

    watch([limit], () => {
        page.value = 1  // Reseta a página para 1 quando o limite mudar
        getOngs()  // Chama a função para buscar os dados
    })

    watch([page], () => {
        getOngs()
    })
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