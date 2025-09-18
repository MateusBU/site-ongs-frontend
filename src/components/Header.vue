<template>
        <!-- App Bar -->
        <v-app-bar class="header"
        image="https://picsum.photos/1920/1080?random"
        scroll-behavior="fade-image" flat>
            <v-app-bar-title class="text-white">
                {{ title }}
            </v-app-bar-title>
                
            <v-spacer />  

            <v-btn text class="text-white">Home</v-btn>
            <v-btn text class="text-white">Sobre</v-btn>
            <v-btn text class="text-white">Contato</v-btn>
        </v-app-bar>
</template>

<script setup>
	defineProps({
		title: String
	})
</script>

<style>
    .header{
        grid-area: header;

        display: flex;
        justify-content: center; /*main axis */
        align-items: center; /*cross axis */
    }
</style>