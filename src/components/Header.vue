<template>
        <!-- App Bar -->
        <v-app-bar class="header" flat :image="headerAnimal"
        scroll-threshold="400" scroll-behavior="hide">

            <router-link class="mainTitle ml-2" to="/">
                <v-app-bar-title class="font-weight-bold" v-ripple>
                    {{ title }}
                </v-app-bar-title>
            </router-link>
    
            <v-spacer /> 
            
            <router-link to="/about">
                <v-btn text class="text-black">Sobre</v-btn>
            </router-link>
            <v-btn text class="text-black">Login</v-btn>
            <v-btn text class="text-black">Cadastrar</v-btn>
        </v-app-bar>
</template>

<script setup>
    import headerAnimal from './../assets/headerAnimal.png'
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

    .mainTitle{
        text-decoration: none;
    }

    .v-app-bar-title {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        color: black;
    }

    .mainTitle .v-toolbar-title {
        transition: all 0.5s ease;
    }

    .mainTitle:hover .v-app-bar-title{
        transform: scale(1.05);
    }
</style>