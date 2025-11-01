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
                <v-window v-model="tab">
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
                                        <v-btn class="text-center mt-4" color="teal" variant="outlined">
                                            Cadastrar nova ONG
                                        </v-btn>
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
    import { ref, onMounted, computed } from 'vue'
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'
    import axios from 'axios'
    import { baseApiUrl } from './../global.js'

    const route = useRoute()
    const store = useStore()
    const user = computed(() => store.state.user)
    const editedUser = ref({})

    const ongs = ref([])

    const tab = ref('user')

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

    onMounted(() =>{
        if (user.value) {
            editedUser.value = { ...user.value }
            getOngs();
        }
        console.log(user.value);
        console.log(user.value.name);
    })

</script>

<style setup>

</style>