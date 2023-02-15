<!-- Siia tuleb Book component, ehk see, kus on raamatu pilt, nimi ja autor main pagel näiteks -->
<template>
    <div class="col" style="padding-top: 12px; padding-bottom: 12px;">
        <div class="card home-card h-100">
            <NuxtLink :to="`/${book.Pealkiri}`" class="card-link">
                <img :src="'http://192.168.31.24:5000/' + book.Pilt" class="card-img-top">
                <div class="card-body d-flex justify-content-between align-items-top p-2">
                    <div class="flex justify-content-center">
                        <h5 id="book-name" class="card-title" style="margin: 0">{{ book.Pealkiri }}</h5>
                        <h5 id="book-author" class="card-title" style="margin: 0">{{ book.Autor }}</h5>
                    </div>
                    <p id="read-more" class="text-end col-4 mt-4">Loe lähemalt...</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { book } = defineProps(['book'])
</script>

<style scoped>

a {
    text-decoration: none;
}

</style>