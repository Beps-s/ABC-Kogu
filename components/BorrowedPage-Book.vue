<template>
  <div class="card">
      <NuxtLink :to="`/borrowedBooks/${props.books.books.Raamatu_ID}`">
          <img :src="'https://zbtfeoishdvbsciusmsn.supabase.co/storage/v1/object/public/images/' + props.books.books.Pilt"
              class="card-img-top" alt="Book cover">
          <div class="card-body">
              <h5 class="card-title">{{ props.books.books.Pealkiri }}</h5>
              <p class="card-text">{{ props.books.books.Autor }}</p>
              <a id="date-text" class="card-link">Tagastamise tähtaeg: <span id="date">{{ props.books.TKuupaev }}</span></a>
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
    background-color: #dadada;
    border: none !important;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}

.card-img-top {
    max-height: 300px;
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