<template>
    <v-main class="content" style="height: 100vh">
        <v-container fluid class="mx-auto" style="max-width: 95%;">

        <!-- Personal Info -->
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="ma-2 pa-4" elevation="7" >
                    <v-card-title class="text-h6 text-teal-darken-2">
                        <v-icon icon="mdi-account" class="me-2"></v-icon>
                        Informações Pessoais
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-sheet class="mx-auto" width="300">
                        <v-form ref="form">
                        <v-text-field
                            v-model="user.name"
                            label="Nome"
                        ></v-text-field>

                        <v-text-field
                            v-model="user.email"
                            label="E-mail"
                        ></v-text-field>


                        <!-- <div class="d-flex flex-column">
                            <v-btn class="mt-4" color="success" block @click="validate" >
                                Salvar
                            </v-btn>

                            <v-btn class="mt-4" color="error" block @click="reset" >
                               Cancelar
                            </v-btn>
                        </div> -->
                        </v-form>
                    </v-sheet>
                </v-card>
            </v-col>
        </v-row>

        <!-- Ongs -->
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="ma-2 pa-4" elevation="7" >
                    <v-card-title class="text-h6 text-teal-darken-2">
                        <v-icon icon="mdi-home" class="me-2"></v-icon>
                        ONGS
                    </v-card-title>

                    <v-divider></v-divider>

                    <div class="d-flex flex-row align-center flex-wrap">
                        <v-card-text class="d-flex align-center justify-start">
                            <v-list v-if="ongs.value" lines="one">
                                <v-list-item
                                    v-for="ong in ongs"
                                    :key="ong.id"
                                    :title="ong.name"
                                ></v-list-item>
                            </v-list>
                            <div>
                                <p>Sem ONG cadastrada</p>
                                <v-card-actions>
                                    <v-btn color="teal" text="Cadastrar" />
                                </v-card-actions>
                            </div>
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>
        </v-row>
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