
<template>
  <div class="d-flex justify-content-center mt-3">
    <div class="card addhotel-card border-2" style="">
      <div class="text-center pt-4">
        <h1><strong>Lisa oma raamat</strong></h1>
      </div>
      <div class="card-body">
        <form id="addForm" class="row g-4">
          <div class="col-md-6">
            <div class="py-2">
              <label for="raamatuNimi" class="inp">
                <input type="text" id="raamatuNimi" placeholder="&nbsp;" required>
                <span class="label">Raamatu nimi</span>
              </label>
            </div>
            <div class="py-2">
              <label for="raamatuKeel" class="inp">
                <input type="text" id="raamatuKeel" placeholder="&nbsp;" required>
                <span class="label">Raamatu keel</span>
              </label>
            </div>
            <div class="py-2 label-in-textarea">
              <textarea class="txtarea"></textarea>
                <label class="action">>Raamatu kirjeldus</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="py-2">
              <label for="raamatuAutor" class="inp">
                <input name="aadressHotell" id="raamatuAutor" autocomplete="off" placeholder="&nbsp;" required>
                <span class="label">Raamatu autor</span>
              </label>
            </div>
            <div class="py-2">
              <label for="raamatuKategooria" class="inp">
                <input type="text" id="raamatuKategooria" placeholder="&nbsp;" required>
                <span class="label">Raamatu kategooria</span>
              </label>
            </div>
            <div class="pt-2">
              <form id="piltForm" action="http://192.168.31.24:5000/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="image" accept="image/png, image/jpeg" class="input-file" id="piltHotell"
                  @change="loadFile">
                <label tabindex="0" for="piltHotell" class="input-file-trigger">Lae ülesse pilt
                  raamatust</label>
              </form>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer align-bottom flex justify-content-center">
        <button id="add-btn" type="submit" form="piltForm" class="btn mainBtn"><strong>Lisa raamat</strong></button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.addhotel-card {
  width: 68rem;
  background-color: #F6F6F6;
  border: none;
  border-radius: 20px;
}

.inp {
  position: relative;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
}

.mainBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  width: 190px;
  background: #FF9B42;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  border-color: #FF9B42;
}

.mainBtn:hover {
  background-color: #FAAB51;
  border-color: #FAAB51;
}

.txtarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  color: rgba(53, 53, 53, 0.5);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
}

.action {
  color: black;
}

.txtarea:focus + label {
  display: none;
}
.txtarea:valid + label {
  display: none;
}

.label-in-textarea {
  position: relative;
}
.label-in-textarea > label {
  position: absolute;
  top: 20px;
  left: 20px;
}

.inp .label {
  position: absolute;
  top: 25px;
  left: 12px;
  font-size: 16px;
  color: #C3C3C3;
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}

.inp input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 66px;
  font-size: 16px;
  font-weight: 400;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  color: #000;
  transition: all 0.15s ease;
}

.inp input:not(:placeholder-shown)+.label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus {
  outline: none;
  box-shadow: inset 0 -2px 0 #FF9B42;
}

.txtarea:focus {
  outline: none;
  box-shadow: inset 0 -2px 0 #FF9B42;
}

.inp input:focus+.label {
  color: #C3C3C3;
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.card-footer {
  background-color: transparent;
  border: none;
  padding: 16px;
}

.input-file-trigger {
  display: block;
  padding: 22px 15px;
  height: 66px;
  background: #FF9B42;
  color: #fff;
  font-size: 1em;
  border-radius: 10px;
  cursor: pointer;
}

.input-file {
  position: absolute;
  opacity: 0;
  padding: 13px;
  cursor: pointer;
}

.input-file:hover+.input-file-trigger,
.input-file:focus+.input-file-trigger,
.input-file-trigger:hover,
.input-file-trigger:focus {
  background: #FAAB51;
  color: #fff;
}
</style>