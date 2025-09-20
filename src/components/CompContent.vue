<template>
	<div>
        <!-- Renders the component matching the current route -->
		<router-view></router-view> 
	</div>
</template>

<script setup>

</script>

<style>
    .content{
        grid-area: content;
        background-color: rgba(0, 128, 128, 0.4);
    }
</style>