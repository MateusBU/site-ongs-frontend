<template>
        <v-app-bar class="header" flat :image="headerAnimal"
        scroll-threshold="400" scroll-behavior="hide"
        :elevation="4">

            <router-link class="mainTitle ml-2" to="/">
                <v-app-bar-title class="font-weight-bold" v-ripple>
                    {{ title }}
                </v-app-bar-title>
            </router-link>
    
            <v-spacer /> 
            
            <router-link to="/about">
                <v-btn text class="text-black btn" rounded="lg" variant="tonal">Sobre</v-btn>
            </router-link>
            <v-btn text class="text-black btn" rounded="lg" variant="tonal">Login</v-btn>
            <v-btn text class="text-black btn" rounded="lg" variant="tonal">Cadastrar</v-btn>
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
    }

    .mainTitle{
        text-decoration: none;
    }

    .v-app-bar-title {
        background-color: rgba(255, 255, 255, 0.356) !important;
        backdrop-filter: blur(2px);
        border-radius: 5px;
        color: black;
    }

    .mainTitle .v-toolbar-title {
        transition: all 0.5s ease;
    }

    .mainTitle:hover .v-app-bar-title{
        transform: scale(1.05);
    }

    .btn{
        margin: 2px;
        background-color: rgba(255, 255, 255, 0.356) !important;
        backdrop-filter: blur(2px);
    }
    .btn:hover {
        border: 1px solid rgba(255, 255, 255, 0.6);
    }
</style>