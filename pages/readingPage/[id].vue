<template>
  <div class="container my-5" style="width:100%">
    <div style="float: left; border: solid red; width: 22%; height: 40%; text-align: center; ">
      <div class="col-md-12">
        <div>
          <img :src="'https://zbtfeoishdvbsciusmsn.supabase.co/storage/v1/object/public/images/' + books[0].Pilt"
               style="width: 200px" alt="Book cover">
        </div>
        <h1 class="mb-1">{{ books[0].Pealkiri }}</h1>
        <h4 class="mb-1">{{ books[0].Autor }}</h4>
      </div>
    </div>
    <div style="float: right; width:70%; text-align: center; background-color: lightgoldenrodyellow; padding: 40px; margin-top:5%;">
      <p class="mb-4">{{ books[0].Sisu }}</p>
      <p>Lehekülg 1/40</p>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { id } = useRoute().params
const {auth} = useSupabaseAuthClient()
const {data: {user}} = await client.auth.getUser()

let { data: books, error } = await client
    .from('RAAMATUD')
    .select('*')
    .eq('Raamatu_ID', id)

console.log(books)
</script>

<style scoped>
</style>