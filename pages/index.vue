<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Filtrid</h4>
          </div>
          <div class="card-body">
            <filterModal :books="books" @filtered="filteredBook = $event" />
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div v-for="books in filteredBook" :key="books.Raamatu_ID" class="col-md-3 mb-4">
            <HomePage-Book :books="books" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import filterModal from '~/components/filterModal.vue'

const props = defineProps({
  searchValue: String
})

const client = useSupabaseClient()
const books = ref([])
const filteredBook = ref([])

async function getBooks() {
  const { data, error } = await client.from('RAAMATUD').select('*')
  if (error) {
    console.error(error)
    return
  }
  books.value = data
  filteredBook.value = data
}

onMounted(getBooks)

function filterBook() {
  if (!props.searchValue) {
    filteredBook.value = books.value
    return
  }
  filteredBook.value = books.value.filter((item) =>
    item.Pealkiri.toLowerCase().includes(props.searchValue.toLowerCase()) ||
    item.Autor.toLowerCase().includes(props.searchValue.toLowerCase())
  )
}

watchEffect(() => {
  filterBook()
})

</script>

<style scoped></style>
