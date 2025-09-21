<template>
    <v-main class="content" style="height: 100vh">
      <v-container class="mt-12 ongs-container">

        <div v-for="ong in ongs" :key="ong.id">
            
            <v-card class="mx-auto" width="300px" :to="{name: 'OngById', params: {id: ong.id}}" router :ripple="false">
                <v-img height="200px"
                    class="align-end text-white"
                    :src="headerAnimal"
                    contain>
                    <v-card-title class="name-ong-img">{{ ong.name }}</v-card-title>
                 </v-img>

                <v-card-actions>
                <v-btn
                    color="orange-lighten-2"
                    text="Explore"
                ></v-btn>

                </v-card-actions>

            </v-card>

        </div>
      </v-container>
    </v-main>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    import { baseApiUrl } from './../global.js'
    import headerAnimal from './../assets/imgLogoDefault.png'

    const ongs = ref([])

    async function getOngs() {
    try {
        const res = await axios.get(`${baseApiUrl}/ongs`)
        ongs.value = res.data;      
    } catch (err) {
        console.error("Erro ao buscar ONGs:", err)
    }
    }

    onMounted(() => {
    getOngs()
    })
</script>

<style scoped>

    .ongs-container {
        display: flex;
        flex-wrap: wrap; /* permite quebrar linha */
        gap: 16px;       /* espaço entre os cards */
    }

    .name-ong-img {
        position: absolute;
        bottom: 0;                /* encosta na parte de baixo */
        left: 0;                  /* opcional: alinhar à esquerda */

        padding: 0 8px;
        border-top-right-radius: 10px;
        background-color: rgba(255, 255, 255, 0.666) !important;
        backdrop-filter: blur(2px);
        color: teal;
        font-weight: bold;
    }
</style>