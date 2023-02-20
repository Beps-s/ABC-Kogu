<template>
  <div class="modal-overlays">
    <div class="wrapper">
      <div class="d-grid d-md-flex justify-content-md-end">
        <button class="btn-close close" @click="$emit('close-modal')" aria-label="Close"></button>
      </div>
      <div class="title-text">
        <div class="title login">Login</div>
      </div>
      <div class="form-container">
        <div class="form-inner">
          <form action="#" @submit="login" class="login">
            <div class="field">
              <input type="email" v-model="emailLogin" placeholder="E-maili Aadress" required>
            </div>
            <div class="field">
              <input type="password" v-model="paroolLogin" placeholder="Parool" required>
            </div>
            <h3>{{ message }}</h3>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Logi sisse" data-bs-dismiss="modal">
            </div>
            <div class="signup-link">
              Pole kasutajat? <a data-bs-toggle="modal" data-bs-target="#registerModal">Registreeri
                siin</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.modal-overlays {
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
  height: 400px;
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
  border-radius: 5px;
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
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}
</style>