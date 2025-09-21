<template>
  <v-main class="content" style="height: 100vh">

    <!-- Title -->
      <div class="d-flex justify-center align-begin mt-2">
        <h1>{{ ong.name }}</h1>
      </div>

<!-- Logo + Descrição -->
    <v-container class="mt-2">
      <v-row align="center">
        <!-- Logo -->
        <v-col cols="12" md="3" class="d-flex justify-begin">
          <v-img
            :src="headerAnimal"
            alt="Logo da ONG"
            height="200px"
            max-width="200px"
            contain
            style="border-radius: 12px;"
          />
        </v-col>

        <!-- Descrição -->
        <v-col cols="12" md="9">
            <v-card class="ma-1 pa-2">
                <v-card-text class="text-body-1">
                    É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).
                </v-card-text>

                <hr>
                <div class="text-center mb-4">
                    <h2 class="text-h5 mb-2 text-teal">Animais que ajudamos</h2>
                    <v-divider class="mx-auto" style="width: 40%; border-color: teal;"></v-divider>
                </div>

                <div class="animals-list">
                    <div class="animal-item"
                        v-for="(animal, index) in ong.helpedAnimals" :key="index">
                        • {{animal}}
                    </div>
                </div>
            </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Telefons -->
    <v-card
      v-if="ong.number1 || ong.number2"
      class="ma-6 pa-4"
      elevation="2"
    >
      <v-card-title class="text-h6 text-teal">
        <v-icon icon="mdi-phone" class="me-2"></v-icon>
        Telefones
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <div v-if="ong.number1" class="d-flex align-center mb-2">
          <v-icon icon="mdi-phone-outline" class="me-2 text-grey-darken-1"></v-icon>
          <span><strong>Telefone 1:</strong> {{ formatPhoneBR(ong.number1) }}</span>
        </div>

        <div v-if="ong.number2" class="d-flex align-center">
          <v-icon icon="mdi-phone-outline" class="me-2 text-grey-darken-1"></v-icon>
          <span><strong>Telefone 2:</strong> {{ formatPhoneBR(ong.number2) }}</span>
        </div>
      </v-card-text>
    </v-card>


<!-- Adress -->

  </v-main>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import axios from 'axios'
    import { baseApiUrl } from './../global.js'
    import headerAnimal from './../assets/imgLogoDefault.png'

    const route = useRoute()
    const ong = ref({})

    const icons = computed(() => [
        { name: 'mdi-phone'},
        { name: 'mdi-facebook-box'},
        { name: 'mdi-whatsapp'},
        { name: 'mdi-instagram'},
        { name: 'mdi-twitter'}
    ])

    async function getOng() {
        try {
            const url = `${baseApiUrl}/ongs/${route.params.id}`
            const res = await axios.get(url)
            ong.value = res.data
            console.log(ong)
        } catch (err) {
            console.error("Erro ao buscar ONG:", err)
        }
    }

    function formatPhoneBR(phone) {
        const digits = phone.replace(/\D/g, '')

        if (digits.length === 11) {
            return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        } else if (digits.length === 10) {
            return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
        }

        return phone
    }

    onMounted(() => {
        getOng()
    })

</script>

<style scoped>
    .animals-list {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: normal;
        align-content: normal;
        height: 100px;
        gap: 4px;
    }

    .animal-item {
        min-width: 80px;
    }
</style>