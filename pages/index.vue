<template>
  <div v-show="!showFilterModal">
  <button @click="showFilterModal = true" style="cursor: pointer;" class="button">Ava filtrid</button>
  </div>
  <filterModal v-show="showFilterModal" @close-modal="showFilterModal = false" @filter="filter" />
  <div class="container">
    <div class="row row-cols-4">
      <div v-for="b in books">
        <HomePage-Book :book="b"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const {data: books} = await useFetch('http://192.168.31.24:5000/books')
console.log(books._value)
</script>
<script>
import filterModal from '~/components/filterModal.vue'

export default {
  components: {filterModal },
  data() {
    return {
      showFilterModal: true,
    }
  },
  methods: {
    filter(tag) {
      console.log(tag)
    }
  }
}

</script>

<style scoped>
</style>