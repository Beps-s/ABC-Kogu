<template>
  <div class="modal-overlays">
    <div class="wrapper">
      <div class="d-grid d-md-flex justify-content-md-end">
        <button class="btn-close close" @click="$emit('close-modal')" aria-label="Close"></button>
      </div>
      <div class="title-text">
        <div class="title register">Registreeri</div>
      </div>
      <div class="form-container">
        <div class="form-inner">
          <form @submit.prevent="register" class="login" autocomplete="off">
            <div class="field">
              <input type="text" v-model="eesnimiReg" placeholder="Eesnimi" autocomplete="off" required>
            </div>
            <div class="field">
              <input type="text" v-model="perenimiReg" placeholder="Perenimi" autocomplete="off" required>
            </div>
            <div class="field">
              <input type="email" v-model="emailReg" placeholder="E-maili Aadress" autocomplete="off" required>
            </div>
            <div class="field">
              <input type="password" v-model="paroolReg" placeholder="Parool" required>
            </div>
            <div class="field">
              <input type="password" v-model="paroolUuestiReg" placeholder="Parool uuesti" required>
            </div>
            <h3>{{ message }}</h3>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Loo konto" data-bs-dismiss="modal">
            </div>
            <div class="signup-link">
              Kasutaja juba olemas? <a @click="$emit('changeModal')">Logi sisse</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeModal'])
const client = useSupabaseAuthClient()
const { auth } = useSupabaseAuthClient()

const eesnimiReg = ref('')
const perenimiReg = ref('')
const emailReg = ref('')
const paroolReg = ref('')
const paroolUuestiReg = ref('')
const message = ref('')

async function register() {
  if (paroolReg.value !== paroolUuestiReg.value) {
    message.value = 'Paroolid ei kattu'
    return
  }
  if (paroolReg.value.length < 8) {
    message.value = 'Parool peab olema vähemalt 8 tähemärki pikk'
    return
  }
  const { user, error } = await client.auth.signUp({
    email: emailReg.value,
    password: paroolReg.value,
    options: {
      data: {
        eesnimi: eesnimiReg.value,
        perenimi: perenimiReg.value,
      },
    },
  });
  if (error) {
    message.value = error.message
    return;
  } else {
    closeClick()
    alert("Kasutaja loodud!")
    return user;
  }
}

const closeClick = () => {
  emit('closeModal')
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

h3 {
  color: red;
  font-weight: bold;
  font-size: 20px;
  margin-top: 2%;
}

.modal-overlays {
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.wrapper {
  overflow: hidden;
  margin-top: 10%;
  height: 640px;
  width: 500px;
  text-align: center;
  background-color: white;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}

.wrapper .title-text {
  display: flex;
  width: 200%;
}

.wrapper .title {
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}


#signup:checked~label.login {
  color: #000;
}

#login:checked~label.login {
  cursor: default;
  user-select: none;
}

.wrapper .form-container {
  width: 100%;
  overflow: hidden;
}

.form-container .form-inner {
  display: flex;
  width: 200%;
}

.form-container .form-inner form {
  width: 50%;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-inner form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
}

.form-inner form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;
}

.form-inner form .field input:focus {
  border-color: #FF9B42;
  /* box-shadow: inset 0 0 3px #fb6aae; */
}

.form-inner form .field input::placeholder {
  color: #999;
  transition: all 0.3s ease;
}

form .field input:focus::placeholder {
  color: #b3b3b3;
}

.form-inner form .signup-link {
  text-align: center;
  margin-top: 30px;
}

.form-inner form .signup-link a {
  color: #FF9B42;
  text-decoration: none;
  cursor: pointer;
}

.form-inner form .signup-link a:hover {
  text-decoration: underline;
}

form .btn {
  height: 50px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

form .btn .btn-layer {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(right,
      #FF9B42,
      #f1cd2b,
      #FF9B42,
      #f1cd2b);
  transition: all 0.4s ease;
}

form .btn:hover .btn-layer {
  left: 0;
}

form .btn input[type="submit"] {
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  background: none;
  border: none;
  color: #fff;
  padding-left: 0;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}
</style>