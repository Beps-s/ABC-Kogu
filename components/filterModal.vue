<template>
  <div>
    <div class="filters">
      <div @click="closeCategory()" style="cursor: pointer;"><h5>Kategooria <img src="~/assets/images/Arrow.png" id="arrow" alt="arrow"></h5></div>
      <div v-if="Kategooria === true" class="category" v-for="filter in categoryFilters" :key="filter">
        <input type="checkbox" :id="filter" :value="filter" v-model="selectedCategoryFilters"
               @change="toggleCategoryFilter(filter)">
        <label :for="filter">{{ filter }}</label>
      </div>
      <div @click="closeLanguage()" style="cursor: pointer;"><h5>Keel <img src="~/assets/images/Arrow.png" id="arrow2" alt="arrow"></h5></div>
      <div v-if="Keel === true" class="language" v-for="filter in languageFilters" :key="filter">
        <input type="checkbox" :id="filter" :value="filter" v-model="selectedLanguageFilters"
               @change="toggleLanguageFilter(filter)">
        <label :for="filter">{{ filter }}</label>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-4">
        <div v-for="book in filteredBooks" :key="book.Raamatu_ID">
          <HomePage-Book :book="book"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<script>
export default {
  name: "FilterModal",
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filter: "",
      categoryFilters: ['Ajalugu', 'Arvuti ja internet', 'Astroloogia', 'Arhitektuur ja sisekujundus', 'Biograafia', 'Humanitaarteadus', 'Ilukirjandus', 'Keeled ja sõnastikud', 'Kodu ja aed', 'Kokandus', 'Kunst ja muusika', 'Lastekirjandus', 'Loodusteadus', 'Majandus', 'Meelelahutus', 'Noortekirjandus', 'Poliitika', 'Psühholoogia', 'Turism', 'Religioon', 'Suhted ja perekond', 'Teatmeteos', 'Tervis', 'Pedagoogika'],
      languageFilters: ["Eesti keel", "Inglise keel", "Vene keel", "Rootsi keel", "Soome keel", "Saksa keel"],
      selectedCategoryFilters: [],
      selectedLanguageFilters: [],
      Keel: false,
      Kategooria: false,
      rotationAngle: 0,
    };
  },
  methods: {
    closeCategory() {
      this.Kategooria = !this.Kategooria;
      const image = document.getElementById("arrow");
      this.rotationAngle += 90;
      if (this.rotationAngle === 180) {
        this.rotationAngle = 0;
      }
      image.style.transform = `rotate(${this.rotationAngle}deg)`;
    },
    closeLanguage() {
      this.Keel = !this.Keel;
      const image2 = document.getElementById("arrow2");
      this.rotationAngle += 90;
      if (this.rotationAngle === 180) {
        this.rotationAngle = 0;
      }
      image2.style.transform = `rotate(${this.rotationAngle}deg)`;
    },
    toggleCategoryFilter(filter) {
      if (!this.selectedCategoryFilters.includes(filter)) {
        this.selectedCategoryFilters = this.selectedCategoryFilters.filter((f) => f !== filter)
      } else {
        this.selectedCategoryFilters = this.selectedCategoryFilters.filter((f) => f !== filter)
        this.selectedCategoryFilters.push(filter)
      }
      this.$emit('filtered', this.applyFilters())
    },
    toggleLanguageFilter(filter) {
      if (!this.selectedLanguageFilters.includes(filter)) {
        this.selectedLanguageFilters = this.selectedLanguageFilters.filter((f) => f !== filter)
      } else {
        this.selectedLanguageFilters = this.selectedLanguageFilters.filter((f) => f !== filter)
        this.selectedLanguageFilters.push(filter)
      }
      this.$emit('filtered', this.applyFilters())
    },
    // Filter options methods here
    applyFilters() {
      if (this.selectedLanguageFilters.length === 0 && this.selectedCategoryFilters.length === 0) {
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
    },
  }
};
</script>

<style scoped>

img {
  width: 15px;
  height: 12px;
  position: relative;
  rotate: 270deg;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
