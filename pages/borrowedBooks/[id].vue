<template>
  <div class="container my-5 position-relative">
    <div class="row">
      <div class="col-md-5">
        <img :src="'https://tlinhoehmoowgezzwnoo.supabase.co/storage/v1/object/public/ABC-Kogu/' + books[0].Pilt"
          class="img-fluid" alt="Book cover">
      </div>
      <div class="col-md-7 d-flex flex-column position-relative">
        <h1 class="mb-4">{{ books[0].Pealkiri }}</h1>
        <NuxtLink :to="`/readingPage/${books[0].Raamatu_ID}`"><button class="button position-absolute top-0 end-0">Loe</button></NuxtLink>
        <h4 class="mb-3">{{ books[0].Autor }}</h4>
        <p class="mb-4">{{ books[0].Kirjeldus }}</p>
        <div class="position-absolute bottom-0 start-0">
          <button class="button" @click="returnBook">Tagasta</button>
        </div>
        <div class="position-absolute bottom-0 end-0">
          <button class="button" @click="extendReturnDate">Pikenda tähtaega</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { id } = useRoute().params
const { auth } = useSupabaseAuthClient()
const { data: { user } } = await client.auth.getUser()

let { data: books, error } = await client
  .from('RAAMATUD')
  .select('*')
  .eq('Raamatu_ID', id)

async function returnBook() {
  const { data, error } = await client
    .from('LAENUTUSED')
    .delete()
    .eq('Raamatu_ID', id)
  if (error) {
    alert(error)
  } else {
    alert("Raamat tagastatud!")
    navigateTo('/borrowedBooks')
  }
}
async function extendReturnDate() {
  const { data, error } = await client
    .from('LAENUTUSED')
    .delete()
    .eq('Raamatu_ID', id)
  if (error) {
    alert(error)
  } else {
    const { data, error } = await client
      .from('LAENUTUSED')
      .insert({ kasutaja_id: user.id, Raamatu_ID: id });
    if (error) {
      console.log(error)
    } else {
      alert("Raamatu tähtaeg pikendatud!")
      navigateTo('/borrowedBooks')
    }
  }
}
</script>

<style scoped>
.img-fluid {
  min-width: 500px;
  max-width: 500px;
  min-height: 500px;
  max-height: 700px;
  object-fit: cover;
  border-radius: 20px;
}

.button {
  padding: 20px 40px;
  font-weight: bold;
  border-radius: 50px;
  border: 0;
  background-color: #FF9B42;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all .5s ease;
}

.button:hover {
  letter-spacing: 3px;
  background-color: rgb(252, 133, 28);
  color: hsl(0, 0%, 100%);
}
</style>