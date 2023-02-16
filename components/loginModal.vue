<template>
  <!-- Login form -->
  <div class="form-popup" id="loginForm" style="border: solid #f1f1f1">
    <div>
      <div style="float: right; font-size: 30px" @click="$emit('close-modal')">X</div>
      <form action="/" class="form-container">
        <h1>Logi sisse</h1>

        <input type="text" placeholder="E-maili Aadress" name="email" required>

        <input type="password" placeholder="Parool" name="password" required>

        <button type="submit" class="btn">Sisene</button>
        <div style="text-align: center; margin-top: 10px;">Pole kasutajat? <a style="color:#FAAB51"
                                                                              @click="$emit('close-modal'); $emit('show-registerModal');">Registreeri
          siin</a></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

h1 {
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}

input[type=text] {
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  border: none;
}

/* LOGIN FORM  {box-sizing: border-box;} */

/* The popup form - hidden by default */
.form-popup {
  position: absolute;
  margin: 10% 0 0 40%;
  padding: 15px 20px 20px 20px;
  border: 3px solid #f1f1f1;
  z-index: 9;
  background-color: #FFFFFF;
}

/* Add styles to the form container */
.form-container {
  max-width: 350px;
  padding: 30px;
  background-color: white;
  text-align: center;
}

/* Full-width input fields */
.form-container input[type=text],
.form-container input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  color: #C3C3C3;
  border: solid 1px #C3C3C3;
  font-size: 20px;
}

/* When the inputs get focus, do something */
.form-container input[type=text]:focus,
.form-container input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/login button */
.form-container .btn {
  background-color: #FF9B42;
  color: white;
  padding: 7px 0 7px 0;
  border: none;
  cursor: pointer;
  width: 70%;
  margin-top: 50px;
  margin-bottom: 10px;
  opacity: 1;
  font-size: 25px;
  font-weight: bold;
}


/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 0.8;
}

</style>