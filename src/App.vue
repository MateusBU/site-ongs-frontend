<template>
  <v-app id="app">
    
    <Header :title="titleHeader"/>
    <Content />
    <Footer :github="linkGithub" :linkedin="linkLinkedin"/>
  </v-app>
</template>

<script setup>
    import Header from './components/Header.vue'
    import Content from './components/CompContent.vue'
    import Footer from './components/Footer.vue'

  

  const linkGithub = "https://github.com/MateusBU"
  const linkLinkedin = "https://www.linkedin.com/in/mateus-urtassum"
  const titleHeader = "AJUDE UMA ONG"
</script>

<style scoped>
	body{
		margin:0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;  /*whole screen */
		width: 100vw;
		display: grid;
		grid-template-rows: 64px 1fr 40px;
		grid-template-columns: 100%;
		grid-template-areas:
			"header"
			"content"
			"footer";
	}
</style>
