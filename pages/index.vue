<template>
  <div>
    <div v-if="!showFilterModal">
      <button @click="handleButtonClick" style="cursor: pointer;" class="button">Ava filtrid</button>
    </div>
    <div v-if="showFilterModal">
      <filterModal :books="books" @close-modal="handleButtonClick" />
    </div>
    <div v-if="!showFilterModal" class="container">
      <div class="row row-cols-4">
        <div v-for="b in books" :key="b.id">
          <HomePage-Book :book="b"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()

let {data: books, error} = await client
    .from('RAAMATUD')
    .select('*')

const showFilterModal = ref(false)

const handleButtonClick = () => {
  showFilterModal.value = !showFilterModal.value;
}
</script>

<style scoped>
</style>