<!-- Siia tuleb Book component, ehk see, kus on raamatu pilt, nimi ja autor main pagel näiteks -->
<template>
    <div class="col" style="margin-top: 12px; margin-bottom: 12px;">
        <div id="item" class="card home-card h-100">
            <NuxtLink :to="`/borrowedBooks/${book.Pealkiri}`" class="card-link">
                <img :src="'http://192.168.31.24:5000/' + book.Pilt" id="book-image" class="card-img-top">
                <div class="card-body d-flex justify-content-between align-items-top p-2">
                    <div class="flex justify-content-center">
                        <h5 id="book-name" class="card-title">{{ book.Pealkiri }}</h5>
                        <h5 id="book-author" class="card-title">{{ book.Autor }}</h5>
                    </div>
                </div>
              <p id="date-text" class="text-start">Tagastamise tähtaeg: <span id="date">tähtaeg</span></p>
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
.col {
  margin-left: 50px;
}
#item {
  float: left;
  margin-left: 40px;
  max-width: 156px;
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

#date-text {
  margin-left: 7px;
  font-size: 14px;
  color: #000000;
}

#date {
  display: flex;
  justify-content: left;
}

#book-image {
  width: 154.5px;
  align-self: auto;
  justify-content: right;
  align-items: baseline;
  float: top;
}
</style>