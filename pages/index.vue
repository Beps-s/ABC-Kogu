<template>
    <div class="container">
    <div class="row row-cols-4">
        <div v-for="b in books">
            <HomePage-Book :book="b" />
        </div>
    </div>
</div>
</template>

<script setup>
const { data: books } = await useFetch('http://192.168.31.24:5000/books')
</script>

<style scoped>

</style>