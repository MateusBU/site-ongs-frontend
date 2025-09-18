<template>
    <v-footer app color="teal" class="footer">
        <div class="d-flex ga-2 ms-auto">
            <v-btn
                v-for="icon in icons"
                :key="icon.name"
                :icon="icon.name"
                :href="icon.link"
                target="_blank"
                rel="noopener"
                density="comfortable"
                variant="text"
            ></v-btn>
        </div>
      <v-col class="text-center white--text">
        © {{ new Date().getFullYear() }} Mateus Urtassum
      </v-col>
    </v-footer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  github: { type: String},
  linkedin: { type: String}
})

const icons = computed(() => [
  { name: 'mdi-github', link: props.github },
  { name: 'mdi-linkedin', link: props.linkedin }
])
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: teal;
        /* color:black; */

        display: flex;
        justify-content: flex-end; /*main axis */
        align-items: center; /*cross axis */
        padding-right: 10px;
    }
</style>