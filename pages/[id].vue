<template>
  <div v-if="isLoading" class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
  </div>
  <div v-else-if="books" class="container my-5">
    <div class="row">
      <div class="col-md-5">
        <img :src="img_src" class="img-fluid" alt="Book cover">
      </div>
      <div class="col-md-7 d-flex flex-column">
        <h1 class="mb-4">{{ books.Pealkiri }}</h1>
        <h4 class="mb-3">{{ books.Autor }}</h4>
        <p class="mb-4">{{ books.Kirjeldus }}</p>
        <div class="text-center mt-auto">
          <div class="d-inline-block">
            <button v-if="user" class="button" @click="borrow">Laenuta</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';

const client = useSupabaseClient()
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()

const { id } = useRoute().params
const isLoading = ref(false)
const books = ref(null)
const img_src = ref(null)

async function getBooks() {
  isLoading.value = true
  const { data, error } = await client.from('RAAMATUD').select('*').eq('Raamatu_ID', id)
  if (error) {
    console.error(error)
    return
  }
  if (data && data.length > 0) {
    books.value = data[0];
    if (books.value) {
      img_src.value = "https://zbtfeoishdvbsciusmsn.supabase.co/storage/v1/object/public/images/" + books.value.Pilt
    }
  } else {
    books.value = null;
  }
  isLoading.value = false
}

async function borrow() {
  const {data, error} = await client
      .from('LAENUTUSED')
      .select('*')
      .eq('kasutaja_id', user.value.id)
      .eq('Raamatu_ID', id)
  if (error) {
    console.log(error)
  } else {
    if (data.length === 0) {
      const {data, error} = await client
          .from('LAENUTUSED')
          .insert({kasutaja_id: user.value.id, Raamatu_ID: id});
    } else {
      alert("Oled juba laenutanud raamatu")
    }
  }
}

onBeforeMount(getBooks);

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

.loadingspinner {
  --square: 26px;
  --offset: 30px;
  --duration: 2.4s;
  --delay: 0.2s;
  --timing-function: ease-in-out;
  --in-duration: 0.4s;
  --in-delay: 0.1s;
  --in-timing-function: ease-out;
  margin-top: 25%;
  width: calc(3 * var(--offset) + var(--square));
  height: calc(2 * var(--offset) + var(--square));
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.loadingspinner div {
  display: inline-block;
  background: darkorange;
  /*background: var(--text-color);*/
  /*box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);*/
  border: none;
  border-radius: 2px;
  width: var(--square);
  height: var(--square);
  position: absolute;
  padding: 0px;
  margin: 0px;
  font-size: 6pt;
  color: black;
}

.loadingspinner #square1 {
  left: calc(0 * var(--offset));
  top: calc(0 * var(--offset));
  animation: square1 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square2 {
  left: calc(0 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square2 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square3 {
  left: calc(1 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square3 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(2 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square4 {
  left: calc(2 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square4 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(3 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square5 {
  left: calc(3 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square5 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(4 * var(--in-delay)) var(--in-timing-function) both;
}

@keyframes square1 {
  0% {
    left: calc(0 * var(--offset));
    top: calc(0 * var(--offset));
  }

  8.333% {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
  }

  100% {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes square2 {
  0% {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
  }

  8.333% {
    left: calc(0 * var(--offset));
    top: calc(2 * var(--offset));
  }

  16.67% {
    left: calc(1 * var(--offset));
    top: calc(2 * var(--offset));
  }

  25.00% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }

  83.33% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }

  91.67% {
    left: calc(1 * var(--offset));
    top: calc(0 * var(--offset));
  }

  100% {
    left: calc(0 * var(--offset));
    top: calc(0 * var(--offset));
  }
}

@keyframes square3 {

  0%,
  100% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }

  16.67% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }

  25.00% {
    left: calc(1 * var(--offset));
    top: calc(0 * var(--offset));
  }

  33.33% {
    left: calc(2 * var(--offset));
    top: calc(0 * var(--offset));
  }

  41.67% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }

  66.67% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }

  75.00% {
    left: calc(2 * var(--offset));
    top: calc(2 * var(--offset));
  }

  83.33% {
    left: calc(1 * var(--offset));
    top: calc(2 * var(--offset));
  }

  91.67% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes square4 {
  0% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }

  33.33% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }

  41.67% {
    left: calc(2 * var(--offset));
    top: calc(2 * var(--offset));
  }

  50.00% {
    left: calc(3 * var(--offset));
    top: calc(2 * var(--offset));
  }

  58.33% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }

  100% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes square5 {
  0% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }

  50.00% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }

  58.33% {
    left: calc(3 * var(--offset));
    top: calc(0 * var(--offset));
  }

  66.67% {
    left: calc(2 * var(--offset));
    top: calc(0 * var(--offset));
  }

  75.00% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }

  100% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes squarefadein {
  0% {
    transform: scale(0.75);
    opacity: 0.0;
  }

  100% {
    transform: scale(1.0);
    opacity: 1.0;
  }
}
</style>