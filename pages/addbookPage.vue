
<template>
  <div class="jou" align="center">
    <div class="box">
      <h1 class="pealkiri">Raamatu lisamine</h1>
      <form class="form">
        <div style="display:inline-block; float: right;">
          <input type="text" id="rautor" name="rautor" placeholder="Raamatu autor" required><br><br>
        </div>
        <div style="display:inline-block; float:left">
        <input type="text" id="rnimi" name="rnimi" placeholder="Raamatu nimi" required><br><br>
        </div>
        <div style="display:inline-block; float:left">
        <input type="text" id="rkeel" name="rkeel" placeholder="Raamatu keel" required><br><br>
        </div>
        <div style="display:inline-block; float: right;">
          <input type="text" id="rkategooria" name="rkategooria" placeholder="Raamatu kategooria" required><br><br>
        </div>
        <div style="display:inline-block; float:left">
          <input type="text" id="rkirjeldus" name="rkirjdelus" placeholder="Raamatu kirjeldus" required><br><br>
        </div>
        <div style="display:inline-block; float:right">
        <input type="text" id="pilt" name="pilt" placeholder="Pilt"><br><br>
        </div>
        <button class="button" type="submit">Lisa raamat</button>
        </form>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
.box {
  background-color: #dfdfdf;
  width:40%;
  height:600px;
  padding:25px;
  margin: 50px;
}

.form {
  margin:50px;
  font-size: 30px;
}


.button {
  margin-top: 10%;
  border: none;
  background: #FAAB51;
  border-radius: 15px;
  padding: 10px 50px;
  font-size: 25px;
  font-weight: bold;
}



.pealkiri {
  text-align: center;
  font-size:50px;
}
</style>