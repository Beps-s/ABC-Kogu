<template>
  <div v-if="isLoading" class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
  </div>
  <div v-else-if="books" class="container">
    <h1>Minu laenutatud raamatud:</h1>
    <div v-if="!books.length > 0">
      <h3 class="text-center">Teil ei ole ühtegi laenutatud raamatut</h3>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div v-for="books in books" :key="books.Raamatu_ID" class="col-md-3 mb-4">
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
const books = ref(null)
const isLoading = ref(false)
const { data: {user}} = await client.auth.getUser()

async function getBooks() {
  isLoading.value = true
  const id = user.id;
  const { data, error } = await client
      .from('LAENUTUSED')
      .select(`books:RAAMATUD (Autor, Kategooria, Keel, Kirjeldus, Pealkiri, Pilt, Raamatu_ID, Sisu), *`)
      .eq('kasutaja_id', id)
  if (error) {
    console.error(error)
    return
  } else {
    books.value = data
  }
  isLoading.value = false
}

onBeforeMount(getBooks);

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