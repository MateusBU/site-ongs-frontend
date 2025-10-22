<template>
    <v-main  class="content" style="height: 100vh">
        <div class="auth-content">
            <div class="auth-model">
                <div class="auth-title">Login</div>
                <input type="text" name="email" v-model="user.email" placeholder="E-mail">
                <input type="password" name="password" v-model="user.password" placeholder="Senha">
                <v-btn @click="signin">Login</v-btn>
            </div>
        </div>
    </v-main>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import { baseApiUrl, userKey } from '../../global.js'

    const store = useStore()
    const router = useRouter()
    const user = ref({
        email: '',
        password: ''
    })

    async function signin() {
        try {
            const res = await axios.post(`${baseApiUrl}/signin`, user.value)
            
            // salva usuário no Vuex e localStorage
            store.commit('setUser', res.data)
            localStorage.setItem(userKey, JSON.stringify(res.data))

            // redireciona
            router.push({ path: '/user' })
            console.log('login OK')
        } catch (error) {
            console.error('Erro ao fazer login:', error)
        }
    }
</script>

<style setup>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-model {
        background-color: teal;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-model input {
        border: 1px solid #BBB;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
        border-radius: 5px;
    }

    input::placeholder {
        color: black !important;
        opacity: 0.8;
    }
</style>