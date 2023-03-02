<!-- Siia tuleb Book component, ehk see, kus on raamatu pilt, nimi ja autor main pagel näiteks -->
<template>
    <div class="col" style="padding-top: 20px; padding-bottom: 20px;">
        <div class="card home-card">
            <NuxtLink :to="`/${book.Pealkiri}`" class="card-link">
                <img :src="'http://192.168.31.24:5000/' + book.Pilt" class="card-img-top">
                <div class="card-body">
                    <div class="">
                        <h3 id="book-name">{{ book.Pealkiri }}</h3>
                        <div class="flex card-end">
                            <h5 id="book-author">{{ book.Autor }}</h5>
                        </div>
                      <p id="details" class="text-start">Loe lähemalt</p>
                    </div>
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

.card-img-top {
    height: 400px;
    object-fit: cover;
}

.home-card {
    background-color: #f5f5f5 !important;
    border: none !important;
    border-radius: 20px !important;
}

.card-body {
    color: black;
}

#book-author {
  font-size: 14px;
  color: #6D6D6D;
}

#book-name {
  font-size: 20px;
  margin-top: -5px;
  color: #000000;
}

#details {
  display: flex;
  justify-content: right;
}
</style>