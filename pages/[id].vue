<template>
  <div>
    <div class="container">
      <img class="image" :src="'https://zbtfeoishdvbsciusmsn.supabase.co/storage/v1/object/public/images/' + books[0].Pilt">
      <div class="details">
        <h1> {{ books[0].Pealkiri }} </h1>
        <p> {{ books[0].Autor }} </p>
        <p> {{ books[0].Kirjeldus }} </p>
        <div>
          <button class="button">Laenuta</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { id } = useRoute().params

let { data: books, error } = await client
  .from('RAAMATUD')
  .select('*')
  .eq('Raamatu_ID', id)

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.details {
  align-self: auto;
  justify-content: right;
  align-items: baseline;
}

.image {
  align-self: auto;
  justify-content: right;
  align-items: baseline;
  float: left;
  margin-left: 50px;
  margin-right: 50px;
}

.button {
  margin-left: 20%;
  border: none;
  background: #FF9B42;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: bold;
}
</style>