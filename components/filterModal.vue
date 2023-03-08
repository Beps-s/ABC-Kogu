<template>
  <div>
    <div class="filters">
      <button @click="$emit('close-modal')" id="closeBtn">X</button>
      <h3>Filtrid:</h3><h5>Kategooria</h5>
      <div class="category" v-for="filter in categoryFilters" :key="filter">
        <input type="checkbox" :id="filter" :value="filter" v-model="selectedCategoryFilters" @change="toggleCategoryFilter(filter)">
        <label :for="filter">{{ filter }}</label>
      </div><h5>Keel</h5>
      <div class="language" v-for="filter in languageFilters" :key="filter">
        <input type="checkbox" :id="filter" :value="filter" v-model="selectedLanguageFilters" @change="toggleLanguageFilter(filter)">
        <label :for="filter">{{ filter }}</label>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-4">
        <div v-for="b in filteredBooks" :key="b.id">
          <HomePage-Book :book="b"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filter: "",
      categoryFilters: ["Ajalugu", "Ilukirjandus", "Kokandus", "Lastekirjandus", "Noortekirjandus", "Tervis"],
      languageFilters: ["Eesti keel", "Inglise keel", "Vene keel", "Rootsi keel", "Soome keel", "Saksa keel"],
      selectedCategoryFilters: [],
      selectedLanguageFilters: [],
    };
  },
  methods: {
    toggleCategoryFilter(filter) {
      if (!this.selectedCategoryFilters.includes(filter)) {
        this.selectedCategoryFilters = this.selectedCategoryFilters.filter((f) => f !== filter)
      } else {
        this.selectedCategoryFilters = this.selectedCategoryFilters.filter((f) => f !== filter)
        this.selectedCategoryFilters.push(filter)
      }
    },
    toggleLanguageFilter(filter) {
      if (!this.selectedLanguageFilters.includes(filter)) {
        this.selectedLanguageFilters = this.selectedLanguageFilters.filter((f) => f !== filter)
      } else {
        this.selectedLanguageFilters = this.selectedLanguageFilters.filter((f) => f !== filter)
        this.selectedLanguageFilters.push(filter)
      }
    },
  },
  computed: {
    filteredBooks() {
      if (this.selectedLanguageFilters.length === 0 && this.selectedCategoryFilters.length === 0 ) {
        return this.books
      } else {
        return this.books.filter((b) => {
          // Return true if the book's category or language matches any of the selected filters
          if (this.selectedCategoryFilters.length === 0) {
            return this.selectedLanguageFilters.includes(b.Keel)
          } else if (this.selectedLanguageFilters.length === 0) {
            return this.selectedCategoryFilters.includes(b.Kategooria)
          } else {
          return this.selectedCategoryFilters.includes(b.Kategooria) && this.selectedLanguageFilters.includes(b.Keel)
          }
        })
      }
    }
  }
};
</script>

<style scoped>
.filters {
  background-color: #f5f5f5;
  float: left;
  width: 20%;
  height: 600px;
}
.category {
  margin-left: 10px;
  margin-top: 10px;
}
.language {
  margin-left: 10px;
  margin-top: 10px;
}
#closeBtn {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>