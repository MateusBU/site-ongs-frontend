<template>
        <v-app-bar class="header" flat :image="headerAnimal" :elevation="4">

            <router-link class="mainTitle ml-2" to="/">
                <v-app-bar-title class="font-weight-bold" v-ripple>
                    {{ title }}
                </v-app-bar-title>
            </router-link>
    
            <v-spacer /> 

            <v-app-bar-nav-icon class="d-flex d-md-none nav-icon-bg" color="teal-darken-2" @click="drawer = !drawer"/>
            
            <div class="d-none d-md-flex">
                <router-link to="/about">
                    <v-btn text class="text-black btn" rounded="lg" variant="tonal">Sobre</v-btn>
                </router-link>
                <router-link :to="{ path: '/auth', query: { mode: 'signin' } }">
                    <v-btn v-if="!isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal">Login</v-btn>
                </router-link>
                <router-link :to="{ path: '/auth', query: { mode: 'signup' } }">
                    <v-btn v-if="!isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal">Cadastrar</v-btn>
                </router-link>
                <router-link to="/user">
                    <v-btn v-if="isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal" @click="logout">Perfil</v-btn>
                </router-link>
                <v-btn v-if="isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal" @click="logout">Sign out</v-btn>
            </div>
        </v-app-bar>

        <!-- MENU DRAWER -->
        <v-navigation-drawer v-model="drawer" color="teal-darken-2" temporary location="right">

        <v-list-item>
            <v-list-item-title class="text-h6">
                Menu
            </v-list-item-title>
        </v-list-item>
        
        <v-divider />

        <v-list nav>
            <v-list-item to="/about" @click="drawer = false">
                <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="!isLoggedIn" :to="{ path: '/auth', query: { mode: 'signin' } }" @click="drawer = false">
                <v-list-item-title>Login</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="!isLoggedIn" :to="{ path: '/auth', query: { mode: 'signup' } }" @click="drawer = false" >
                <v-list-item-title>Cadastrar</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="isLoggedIn" to="/user" @click="drawer = false">
               <v-list-item-title>Perfil</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="isLoggedIn" @click="logout">
                <v-list-item-title>Sign out</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>

</template>

<script setup>
    import { userKey } from '../global.js'
    import { computed, onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    import headerAnimal from './../assets/headerAnimal.png'

	defineProps({
        title: String
	})
    
    const store = useStore()
    const router = useRouter()

    const isLoggedIn = computed(() => !!store.state.user)

    const drawer = ref(false)

    function logout(){
        localStorage.removeItem(userKey);
        store.commit('setUser', null);
        router.push({name: 'Home'});
        console.log('logout OK')
    }

    onMounted(() =>{
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

    .nav-icon-bg {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2px);
        border-radius: 50%;
        padding: 2px;
    }
</style>