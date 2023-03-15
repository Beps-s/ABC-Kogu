
<template>
  <div class="d-flex justify-content-center mt-3">
    <div class="card addbook-card border-2" style="">
      <div class="text-center pt-4">
        <h1><strong>Lisa oma raamat</strong></h1>
      </div>
      <div class="card-body">
        <form id="addForm" @submit="addBook" class="row g-4">
          <div class="col-md-6">
            <div class="py-2">
              <label for="raamatuNimi" class="inp">
                <input type="text" v-model="raamatuNimi" id="raamatuNimi" placeholder="&nbsp;" required>
                <span class="label">Raamatu nimi</span>
              </label>
            </div>
            <div class="py-2">
              <label for="raamatuKeel" class="inp">
                <select class="form-control" id="raamatuKeel" v-model="raamatuKeel" required>
                  <option v-for="language in languages" :key="language">{{ language }}</option>
                </select>
                <span class="label">Raamatu keel</span>
              </label>
            </div>
            <div class="py-2">
              <label for="textArea" class="inp">
                <textarea id="textArea" v-model="raamatuKirjeldus" class="txtarea" placeholder="&nbsp;"
                  required></textarea>
                <span class="label">Raamatu Kirjeldus</span>
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="py-2">
              <label for="raamatuAutor" class="inp">
                <input name="aadressHotell" v-model="raamatuAutor" id="raamatuAutor" autocomplete="off"
                  placeholder="&nbsp;" required>
                <span class="label">Raamatu autor</span>
              </label>
            </div>
            <div class="py-2">
              <label for="raamatuKategooria" class="inp">
                <select class="form-control" id="raamatuKategooria" v-model="raamatuKategooria" required>
                  <option v-for="category in categories" :key="category">{{ category }}</option>
                </select>
                <span class="label">Raamatu kategooria</span>
              </label>
            </div>
            <div class="pt-2">
              <input type="file" name="image" accept="image/png, image/jpeg" class="input-file" id="raamatuPilt"
                @change="handleFileUpload">
              <label tabindex="0" for="raamatuPilt" class="input-file-trigger">
                {{ raamatuPilt?.name || 'Lae ülesse pilt raamatust' }}</label>
            </div>
            <div class="pt-4 justify-content-center text-center">
              <img class="image250" id="output" />
            </div>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <div class="d-inline-block">
                <button id="add-btn" type="submit" class="button"><strong>Lisa raamat</strong></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()

const raamatuNimi = ref('')
const raamatuKeel = ref('')
const raamatuKirjeldus = ref('')
const raamatuAutor = ref('')
const raamatuKategooria = ref('')
const raamatuPilt = ref(null)
const languages = ref(['Eesti keel', 'Inglise keel', 'Vene keel', 'Rootsi keel', 'Soome keel', 'Saksa keel'])
const categories = ref(['Ajalugu', 'Arvuti ja internet', 'Astroloogia', 'Arhitektuur ja sisekujundus', 'Biograafia', 'Humanitaarteadus', 'Ilukirjandus', 'Keeled ja sõnastikud', 'Kodu ja aed', 'Kokandus', 'Kunst ja muusika', 'Lastekirjandus', 'Loodusteadus', 'Majandus', 'Meelelahutus', 'Noortekirjandus', 'Poliitika', 'Psühholoogia', 'Turism', 'Religioon', 'Suhted ja perekond', 'Teatmeteos', 'Tervis', 'Pedagoogika'])


const addBook = async () => {
  await uploadImage(raamatuPilt.value)
  await client
    .from('RAAMATUD')
    .insert({ 'Pealkiri': raamatuNimi.value, 'Autor': raamatuAutor.value, 'Kirjeldus': raamatuKirjeldus.value, 'Keel': raamatuKeel.value, 'Kategooria': raamatuKategooria.value, 'Pilt': raamatuPilt.value.name });
}

const handleFileUpload = (event) => {
  raamatuPilt.value = event.target.files[0]
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
}

const uploadImage = async (file) => {
  const { data, error } = await client.storage.from('images').upload(`/${file.name}`, file)
  if (error) {
    console.error(error)
  } else {
    return data.Key
  }
}

const { data: { user } } = await client.auth.getUser()
let metadata = user.user_metadata
if (!metadata.options) {
    navigateTo('/')
}

</script>

<script>
export default {
  data() {
    return {
      book: {
        category: '',
        content: '',
      },
    }
  },
}
</script>

<style scoped>
.image250 {
  display: inline-block;
  object-fit: contain;
  width: 100%;
  max-width: auto;
  height: 100%;
  max-height: 30vh;
}

.addbook-card {
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

.inp select {
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
  cursor: pointer;
}

.inp select:not(:placeholder-shown)+.label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp select:focus {
  outline: none;
  box-shadow: inset 0 -2px 0 #FF9B42;
}

.inp select:focus+.label {
  color: #C3C3C3;
  transform: translate3d(0, -12px, 0) scale(0.75);
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

.inp {
  position: relative;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
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
  color: rgb(0, 0, 0);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
}

.label {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 16px;
  color: #C3C3C3;
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}

.txtarea:focus+label {
  display: none;
}

.txtarea:valid+label {
  display: none;
}

.txtarea:focus {
  outline: none;
  box-shadow: inset 0 -2px 0 #FF9B42;
}

.txtarea:focus+.label {
  color: #C3C3C3;
  transform: translate3d(0, -25px, 0) scale(0.75);
}

.txtarea:not(:placeholder-shown)+.label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -25px, 0) scale(0.75);
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