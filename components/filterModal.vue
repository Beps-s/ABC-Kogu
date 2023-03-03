<!-- Siit tuleb filter component, ehk see, kus on on filtrid main pagel näiteks -->
<template>
  <div class="filters">
    <div id="closeBtn" @click="$emit('close-modal')">X</div>
    <div>
      <div class="category"><h5>Kategooria</h5>
        <input type="checkbox" id="historyCheck" @click="filterFunction('history'); $emit('filter', 'Ajalugu')">
        <label id="history">Ajalugu</label><br>
        <input type="checkbox" id="fictionCheck" @click="filterFunction('fiction'); $emit('filter', 'Ilukirjandus')">
        <label id="fiction">Ilukirjandus</label><br>
        <input type="checkbox" id="cookingCheck" @click="filterFunction('cooking'); $emit('filter', 'Kokandus')">
        <label id="cooking">Kokandus</label><br>
        <input type="checkbox" id="childLiteratureCheck" @click="filterFunction('childLiterature'); $emit('filter', 'Lastekirjandus')">
        <label id="childLiterature">Lastekirjandus</label><br>
        <input type="checkbox" id="youngLiteratureCheck" @click="filterFunction('youngLiterature'); $emit('filter', 'Noortekirjandus')">
        <label id="youngLiterature">Noortekirjandus</label><br>
        <input type="checkbox" id="healthCheck" @click="filterFunction('health'); $emit('filter', 'Tervis')">
        <label id="health">Tervis</label>
      </div>
      <div class="language"><h5>Keel</h5>
        <input type="checkbox" id="estonianCheck" @click="filterFunction('estonian'); $emit('filter', 'Eesti keel')">
        <label id="estonian">Eesti</label><br>
        <input type="checkbox" id="englishCheck" @click="filterFunction('english'); $emit('filter', 'Inglise keel')">
        <label id="english">Inglise</label><br>
        <input type="checkbox" id="russianCheck" @click="filterFunction('russian'); $emit('filter', 'Vene keel')">
        <label id="russian">Vene</label><br>
        <input type="checkbox" id="swedishCheck" @click="filterFunction('swedish'); $emit('filter', 'Rootsi keel')">
        <label id="swedish">Rootsi</label><br>
        <input type="checkbox" id="finnishCheck" @click="filterFunction('finnish'); $emit('filter', 'Soome keel')">
        <label id="finnish">Soome</label><br>
        <input type="checkbox" id="germanCheck" @click="filterFunction('german'); $emit('filter', 'Saksa keel')">
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
  padding-top: 10px;
}
</style>