<template>
        <v-app-bar class="header" flat :image="headerAnimal"
        :elevation="4">

            <router-link class="mainTitle ml-2" to="/">
                <v-app-bar-title class="font-weight-bold" v-ripple>
                    {{ title }}
                </v-app-bar-title>
            </router-link>
    
            <v-spacer /> 
            
            <div class="d-none d-md-flex">
                <router-link to="/about">
                    <v-btn text class="text-black btn" rounded="lg" variant="tonal">Sobre</v-btn>
                </router-link>
                <router-link to="/auth">
                    <v-btn v-if="!isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal">Login</v-btn>
                </router-link>
                <router-link to="/auth">
                <v-btn v-if="!isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal">Cadastrar</v-btn>
                </router-link>
                <router-link to="/user">
                    <v-btn v-if="isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal" @click="logout">Perfil</v-btn>
                </router-link>
                <v-btn v-if="isLoggedIn" text class="text-black btn" rounded="lg" variant="tonal" @click="logout">Sign out</v-btn>

            </div>

            <!-- <div class="d-flex d-md-none">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
                    </template>

                    <v-list>
                    <router-link to="/about">
                        <v-list-item>
                        <v-list-item-title>Sobre</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <v-list-item>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Cadastrar</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-menu>
            </div> -->
        </v-app-bar>
</template>

<script setup>
    import { userKey } from '../global.js'
    import { computed, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    import headerAnimal from './../assets/headerAnimal.png'

	defineProps({
        title: String
	})
    
    const store = useStore()
    const router = useRouter()

    const isLoggedIn = computed(() => !!store.state.user)

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
</style>