<template>
    <div class="card">
        <NuxtLink :to="`/${props.books.Raamatu_ID}`">
            <img :src="'https://zbtfeoishdvbsciusmsn.supabase.co/storage/v1/object/public/images/' + props.books.Pilt"
                class="card-img-top" alt="Book cover">
            <div class="card-body">
                <h5 class="card-title">{{ props.books.Pealkiri }}</h5>
                <p class="card-text">{{ props.books.Autor }}</p>
                <a class="card-link">Tutvu lähemalt</a>
            </div>
        </NuxtLink>
    </div>
</template>
  

<script setup>
const props = defineProps(['books'])

</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}

.card {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-shadow: #000;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.card-img-top {
    max-height: 300px;
    min-height: 300px;
    object-fit: cover;
}

.card-link {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.5rem;
    text-align: end;
}

.card:hover {
    transform: scale(1.02);
}
</style>