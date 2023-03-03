<template>
  <filterModal/>
  <div class="container">
    <div class="row row-cols-4">
      <div v-for="b in books">
        <HomePage-Book :book="b"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()

let { data: books, error } = await client
  .from('RAAMATUD')
  .select('*')

</script>

<style scoped>

</style>