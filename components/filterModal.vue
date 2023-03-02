<!-- Siit tuleb filter component, ehk see, kus on on filtrid main pagel näiteks -->
<template>
  <div class="filters">
    <div id="closeBtn">X</div>
    <div v-show="!filter">
      <div class="category"><h5>Kategooria</h5>
        <input type="checkbox" id="historyCheck" @click="filterFunction('history')">
        <label id="history">Ajalugu</label><br>
        <input type="checkbox" id="fictionCheck" @click="filterFunction('fiction')">
        <label id="fiction">Ilukirjandus</label><br>
        <input type="checkbox" id="cookingCheck" @click="filterFunction('cooking')">
        <label id="cooking">Kokandus</label><br>
        <input type="checkbox" id="childLiteratureCheck" @click="filterFunction('childLiterature')">
        <label id="childLiterature">Lastekirjandus</label><br>
        <input type="checkbox" id="youngLiteratureCheck" @click="filterFunction('youngLiterature')">
        <label id="youngLiterature">Noortekirjandus</label><br>
        <input type="checkbox" id="healthCheck" @click="filterFunction('health')">
        <label id="health">Tervis</label>
      </div>
      <div class="language"><h5>Keel</h5>
        <input type="checkbox" id="estonianCheck" @click="filterFunction('estonian')">
        <label id="estonian">Eesti</label><br>
        <input type="checkbox" id="englishCheck" @click="filterFunction('english')">
        <label id="english">Inglise</label><br>
        <input type="checkbox" id="russianCheck" @click="filterFunction('russian')">
        <label id="russian">Vene</label><br>
        <input type="checkbox" id="swedishCheck" @click="filterFunction('swedish')">
        <label id="swedish">Rootsi</label><br>
        <input type="checkbox" id="finnishCheck" @click="filterFunction('finnish')">
        <label id="finnish">Soome</label><br>
        <input type="checkbox" id="germanCheck" @click="filterFunction('german')">
        <label id="german">Saksa</label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    filter: Boolean,
  },
  methods: {
    filterFunction: function (filter) {
      var checkBox = document.getElementById(filter + "Check");
      var text = document.getElementById(filter);
      if (checkBox.checked == true) {
        text.style.fontWeight = "bold";
      } else {
        text.style.fontWeight = "normal";
      }
    }
  }
}



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