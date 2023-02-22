<!-- Page, kus on kõik su laenutatud raamatud -->

<template>
  <div>
    <h1 class="p">Minu laenutatud raamatud:</h1>
    <div v-for="b in books">
      <BorrowedPage-Book :book="b" />
    </div>
  </div>
</template>

<script setup>
const { data: books } = await useFetch('http://192.168.31.24:5000/books')
</script>

<style scoped>
.p {
  margin-top: 20px;
  margin-left: 90px;
  margin-right: 20%;
  font-size: 35px;
}
</style>