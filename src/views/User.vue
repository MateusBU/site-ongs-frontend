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
                        v-model="name.value.value"
                        :counter="10"
                        :error-messages="name.errorMessage.value"
                        label="Name"
                        ></v-text-field>

                        <v-text-field
                        v-model="email.value.value"
                        :error-messages="email.errorMessage.value"
                        label="E-mail"
                        ></v-text-field>

                        <div class="d-flex flex-column">
                            <v-btn class="mt-4" color="success" block @click="validate" >
                                Salvar
                            </v-btn>

                            <v-btn class="mt-4" color="error" block @click="reset" >
                               Cancelar
                            </v-btn>
                        </div>
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
                        <v-list lines="one">
                        <v-list-item
                            v-for="n in 3"
                            :key="n"
                            :title="'Item ' + n"
                            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        ></v-list-item>
                        </v-list>
                    </v-card-text>
                </div>
                </v-card>
            </v-col>
        </v-row>
        </v-container>
    </v-main>
</template>

<script setup>

</script>

<style setup>

</style>