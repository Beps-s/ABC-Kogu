<!-- Page, kus on kõik su laenutatud raamatud -->

<template>
  <div>
    <p class="p">Minu laenutatud raamatud:</p>
    <div class="items">
      <div class="item">
        <img class="image" src="https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789949449477.jpg">
        <div class="info">
          <h5>Sipsik</h5>
          <p class="author">Eno Raud</p>
          <div class="date">Tagastamise tähtaeg:
            <br>XX-XX-XXXX
          </div>
        </div>
      </div>
      <div class="item">
        <img class="image" src="https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789949449477.jpg">
        <div class="info">
          <h5>Sipsik</h5>
          <p class="author">Eno Raud</p>
          <div class="date">Tagastamise tähtaeg:
            <br>XX-XX-XXXX
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.items {
  margin-left: 50px;
  margin-right: 20%;
  float: left;
}

.item {
  float: left;
  margin-left: 20px;
}

.author {
  font-size: 14px;
  margin-top: -5px;
  color: #6D6D6D;
}

.p {
  margin-left: 50px;
  margin-right: 20%;
  font-weight: bold;
  font-size: 35px;
}

.info {
  font-size: 10px;
}

.date {
  margin-top: -8px;
}

.image {
  width: 154.5px;
  align-self: auto;
  justify-content: right;
  align-items: baseline;
  float: top;
}
</style>