<template>
    <v-main class="content">

        <v-container class="text-center py-16">
        <h1 class="text-h2 font-weight-bold mb-4">Sobre o <strong>Ajude uma ONG</strong></h1>
        <p class="text-h6 mb-6">
            Um espaço criado para aproximar pessoas de instituições que transformam vidas.
        </p>
        </v-container>

        <v-container class="py-12">
        <v-row>
            <v-col cols="12" md="4">
            <v-card class="pa-6 text-center" elevation="4">
                <v-icon size="40" color="teal">mdi-target</v-icon>
                <h3 class="mt-4">Missão</h3>
                <p>Dar visibilidade às ONGs e facilitar sua conexão com apoiadores.</p>
            </v-card>
            </v-col>
            <v-col cols="12" md="4">
            <v-card class="pa-6 text-center" elevation="4">
                <v-icon size="40" color="teal">mdi-eye</v-icon>
                <h3 class="mt-4">Visão</h3>
                <p>Construir uma ponte entre sociedade e causas sociais.</p>
            </v-card>
            </v-col>
            <v-col cols="12" md="4">
            <v-card class="pa-6 text-center" elevation="4">
                <v-icon size="40" color="teal">mdi-hand-heart</v-icon>
                <h3 class="mt-4">Valores</h3>
                <p>Solidariedade, transparência e impacto positivo.</p>
            </v-card>
            </v-col>
        </v-row>
        </v-container>

        <v-container class="py-12 text-center">
        <h2 class="text-h4 mb-6">Como funciona</h2>
        <v-row>
            <v-col cols="12" md="4">
            <v-card class="pa-6" elevation="2">
                <v-icon size="40" color="secondary">mdi-account-plus</v-icon>
                <h3 class="mt-4">1. Cadastrar ONG</h3>
                <p>ONGs podem se inscrever e divulgar sua causa.</p>
            </v-card>
            </v-col>
            <v-col cols="12" md="4">
            <v-card class="pa-6" elevation="2">
                <v-icon size="40" color="secondary">mdi-magnify</v-icon>
                <h3 class="mt-4">2. Procurar ONGs</h3>
                <p>Usuários podem pesquisar por localização ou área de atuação.</p>
            </v-card>
            </v-col>
            <v-col cols="12" md="4">
            <v-card class="pa-6" elevation="2">
                <v-icon size="40" color="secondary">mdi-heart</v-icon>
                <h3 class="mt-4">3. Apoiar causas</h3>
                <p>Todos podem encontrar e apoiar projetos de impacto social.</p>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
    </v-main>
</template>

<script setup>

</script>

<style scoped>

h1 {
  color: #2c3e50;
}
</style>