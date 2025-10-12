<template>
    <v-main  class="content" style="height: 100vh">
        <div class="auth-content">
            <div class="auth-model">
                <div class="auth-title">Login</div>
                <input type="text">
            </div>
        </div>
    </v-main>
</template>

<script setup>

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
</style>