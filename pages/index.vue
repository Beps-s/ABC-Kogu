<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Filtrid</h4>
          </div>
          <div class="card-body">
            <filterModal />
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
const props = defineProps({
  searchValue: String
})

const client = useSupabaseClient()
const books = ref([])

async function getBooks() {
  const { data, error } = await client.from('RAAMATUD').select('*')
  if (error) {
    console.error(error)
    return
  }
  books.value = data
}

onMounted(getBooks)

const filteredBook = ref([])

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