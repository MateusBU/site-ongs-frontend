<template>
    <v-main class="content" style="height: 100vh">
        <v-container fluid class="mx-auto" style="max-width: 95%;">

            <v-card elevation="10" class="pa-4">

                <!-- Top flaps -->
                <v-tabs v-model="tab" color="teal" bg-color="transparent">
                    
                    <v-tab value="user" class="rounded-t-lg border-b-0 border-info border-md border-teal">
                        <v-icon class="me-2">mdi-account</v-icon>
                        Usuário
                    </v-tab>
                    <v-tab value="ongs" class="rounded-t-lg border-b-0 border-info border-md border-teal">
                        <v-icon class="me-2">mdi-home</v-icon>
                        ONGs
                    </v-tab>

                </v-tabs>

                <v-divider></v-divider>

                <!-- User Content -->
                <v-window v-model="tab" class="ma-2 pa-2">
                    <v-window-item value="user">
                        <v-row justify="center">
                            <v-col cols="12" md="6">
                                <v-card elevation="4" class="pa-4">
                                    <v-card-title class="text-h6 text-teal-darken-2">
                                        <v-icon class="me-2">mdi-account</v-icon>
                                        Informações Pessoais
                                    </v-card-title>

                                    <v-divider></v-divider>

                                    User content
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-window-item>

                    <!-- ONGs Content-->
                    <v-window-item value="ongs">
                        <v-row justify="center">
                            <v-col cols="12" md="8">
                                <v-card elevation="4" class="pa-4">
                                    <v-card-title class="text-h6 text-teal-darken-2">
                                        <v-icon class="me-2">mdi-home</v-icon>
                                        ONGS
                                    </v-card-title>

                                    <v-divider></v-divider>

                                    <v-card-text>
                                        <v-list v-if="ongs.length">
                                            <v-list-item
                                            v-for="ong in ongs"
                                            :key="ong.id"
                                            :title="ong.name"
                                            />
                                        </v-list>

                                        <div v-else class="text-center mt-4">
                                            <p>Nenhuma ONG cadastrada</p>
                                        </div>
                                        <v-btn v-if="!showNewRegister" class="text-center mt-4" color="teal" variant="outlined" @click="openNewRegister">
                                            Cadastrar nova ONG
                                        </v-btn>

                                          <!-- Formulário de cadastro (mostrado quando showForm = true) -->
                                        <v-expand-transition>
                                            <div v-if="showNewRegister" class="mt-4">
                                                <div class="text-center mt-6">
                                                    <p class="text-h4 font-weight-bold text-teal-darken-2">
                                                        🐾 CADASTRO DE NOVA ONG 🐾
                                                    </p>
                                                    <v-divider class="my-3 opacity-75"></v-divider>
                                                </div>
                                                <!-- ONG table -->
                                                <div class="mt-8 mb-2">
                                                    <p class="text-h6 font-weight-bold text-teal-darken-2">Informações Principais</p>
                                                </div>
                                                <v-divider class="mb-4"></v-divider>

                                                <v-text-field v-model="newOng.ong.name" label="Nome da Ong"></v-text-field>
                                                <v-text-field v-model="newOng.ong.number1" label="Telefone 1"></v-text-field>
                                                <v-text-field v-model="newOng.ong.number2" label="Telefone 2"></v-text-field>
                                                <v-text-field v-model="newOng.ong.description" label="Descrição da ONG"></v-text-field>
                                                <v-select v-model="newOng.ong.helpedAnimals" label="Animais que a ONG ajuda" variant="outlined"
                                                    :items="animalItems"
                                                    multiple density="compact" chips
                                                    :menu-props="{maxHeight: 200 }" hide-details/>

                                                <!-- ADDRESS -->
                                                <div class="mt-8 mb-2">
                                                    <p class="text-h6 font-weight-bold text-teal-darken-2">Endereço</p>
                                                </div>
                                                <v-divider class="mb-4"></v-divider>
                                                <v-select v-model="selectedState" class="mt-6" label="Estados" variant="outlined"
                                                    :items="states.map(e => e.sigla)" density="compact" chips hide-details/>
                                                <v-select v-model="newOng.address.city" class="mt-6 mb-6" label="Cidades" variant="outlined"
                                                    :items="cities" density="compact" chips :disabled="!selectedState" hide-details/>

                                                <v-text-field v-model="newOng.address.neighborhood" label="Bairro"></v-text-field>
                                                <v-text-field v-model="newOng.address.street" label="Rua"></v-text-field>
                                                <v-text-field v-model="newOng.address.number" label="Número"></v-text-field>
                                                <v-text-field v-model="newOng.address.additionalAddress" label="Complemento"></v-text-field>
                                                <v-text-field v-model="newOng.address.zipCode" label="CEP"></v-text-field>

                                                <!-- SOCIAL MEDIA -->
                                                <div class="mt-8 mb-2">
                                                    <p class="text-h6 font-weight-bold text-teal-darken-2">Redes Sociais</p>
                                                </div>
                                                <v-text-field v-model="newOng.address.instagram" label="Instagram"></v-text-field>
                                                <v-text-field v-model="newOng.address.facebook" label="Facebook"></v-text-field>
                                                <v-text-field v-model="newOng.address.twitter" label="X/Twitter"></v-text-field>
                                                <v-text-field v-model="newOng.address.tiktok" label="Tiktok"></v-text-field>
                                                <v-text-field v-model="newOng.address.youtube" label="Youtube"></v-text-field>

                                                <v-btn color="teal" class="ma-2" @click="registerOng">Cadastra ONG</v-btn>
                                                <v-btn color="red" class="ma-2" @click="CancelRegisterOng">Fechar</v-btn>
                                            </div>
                                        </v-expand-transition>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-window-item>

                </v-window>
            </v-card>
        </v-container>
    </v-main>
</template>

<script setup>
    import { ref, onMounted, computed, watch } from 'vue'
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'
    import axios from 'axios'
    import { baseApiUrl } from './../global.js'
    import animalsData from './../assets/data/animals.json'

    const route = useRoute()
    const store = useStore()
    const user = computed(() => store.state.user)
    const editedUser = ref({})

    const ongs = ref([])

    const tab = ref('user')

    const showNewRegister = ref(false)

    const animalItems = animalsData.animals;
    const newOng = ref({
        ong:{
            name: '',
            number1: '',
            number2: '',
            description: '',
            logoOng: '',
            helpedAnimals: [], // array de strings
        },
        address: {
            state: '',
            city: '',
            neighborhood: '',
            street: '',
            number: '',
            additionalAddress: '',
            zipCode: ''
        },
        images: [], // array de objetos { image_url, caption }
        socialMedia:{
            instagram: '',
            facebook: '',
            twitter: '',
            tiktok: '',
            youtube: '',
        }    
    });
    
    const states = ref([])
    const cities = ref([])
    const selectedState = ref('')

    async function getOngs() {
        try {
            const url = `${baseApiUrl}/ongs/user/${user.value.id}`
            const res = await axios.get(url);
            ongs.value = res.data;
            console.log(ongs.value);
        } 
        catch (err) {
            console.error("Erro ao buscar ONGs:", err)
        }
    }

    // ADDRESS (CITIES AND STATES)
    async function getStates() {
        const res = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        states.value = res.data.sort((a, b) => a.nome.localeCompare(b.nome))
    }

    async function getCities(uf) {
        const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        cities.value = res.data.map(c => c.nome)
    }

    function openNewRegister() {
        tab.value = 'ongs'
        showNewRegister.value = true
    }

    function registerOng() {
        console.log("RegisterOng")
    }

    function CancelRegisterOng() {
        tab.value = 'ongs'
        newOng.value = {
            ong: {
                name: '',
                number1: '',
                number2: '',
                description: '',
                logoOng: '',
                helpedAnimals: [],
            },
            address: {
                state: '',
                city: '',
                neighborhood: '',
                street: '',
                number: '',
                additionalAddress: '',
                zipCode: ''
            },
            images: [],
                socialMedia: {
                instagram: '',
                facebook: '',
                twitter: '',
                tiktok: '',
                youtube: '',
            }
        };        
        showNewRegister.value = false
    }

    onMounted(async() =>{
        if (user.value) {
            editedUser.value = { ...user.value }
            getOngs();
        }
        await getStates();
        console.log(user.value.name);
    })

    watch(selectedState, async (uf) => {
        if (uf) { 
            const state = states.value.find(s => s.sigla === uf);
            console.log('uf: ', uf)
            console.log('state: ', state)
            newOng.value.address.state = state ? state.sigla : '';
            
            newOng.value.address.city = ''
            await getCities(uf)
        } 
        else {
            cities.value = [];
            newOng.address.state = '';
            newOng.address.city = '';
        }
    })
</script>

<style setup>

</style>