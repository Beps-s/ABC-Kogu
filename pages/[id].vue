<!-- See on page, kui sa vajutad main pagel raamatule ja saad detailsema vaate -->

<template>
  <img :src="'http://192.168.31.24:5000/' + book.Pilt">
  <div>
    <h1> {{ book.Pealkiri }}</h1>
    <p > {{ book.Autor }}</p>
    <p> {{ book.Kirjeldus }}</p>
    <div>
      <button class="button">Laenuta</button>
    </div>
  </div>
</template>

<script setup>
const { pealkiri } = useRoute().params
const urp = 'http://192.168.31.24:5000/books/' + pealkiri

const { data: book } = await useFetch(urp, { key: pealkiri })
console.log(book)
</script>

<style scoped>

.button {
  margin-left: 20%;
  border: none;
  background: #FAAB51;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: bold;
}
</style>