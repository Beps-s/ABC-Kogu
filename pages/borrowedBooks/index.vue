<template>
  <div class="container">
    <h1>Minu laenutatud raamatud:</h1>
    <div v-if="!books.length > 0">
      <h3 class="text-center">Teil ei ole ühtegi laenutatud raamatut</h3>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div v-if="books" v-for="books in filteredBook" :key="books.Raamatu_ID" class="col-md-3 mb-4">
            <BorrowedPage-Book :books="books" />
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
const { auth } = useSupabaseAuthClient()
const { data: {user}} = await client.auth.getUser()
async function getBooks() {
  const id = user.id;
  let { data, error } = await client
      .from('LAENUTUSED')
      .select(`books:RAAMATUD (Autor, Kategooria, Keel, Kirjeldus, Pealkiri, Pilt, Raamatu_ID, Sisu), *`)
      .eq('kasutaja_id', id)
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

<style scoped>

h1 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

h3 {
  margin-top: 20px;
}
</style>