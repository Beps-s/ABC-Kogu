<!-- Main page, kus on loetelu raamatutest ja filtreeri -->

<template>
    <div class="row row-cols-4">
        <div v-for="book in books">
            <Book :nimi="book.pealkiri" :pilt="book.pilt" />
        </div>
    </div>
</template>

<script>
import Book from "../components/book.vue"

export default {
    data() {
        return {
            books: []
        }
    },
    components: {
        Book
    },
    async fetch() {
        console.log("fetching")
        const response = await fetch("http://192.168.31.24:5000/books");
        const finalResponse = await response.json();
        finalResponse.forEach(element => {
            this.books.push(element)
        });
    }
}
</script>

<style scoped>

</style>