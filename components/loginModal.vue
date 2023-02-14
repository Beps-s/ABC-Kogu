<template>
    <!-- Login form -->
    <div class="modal-overlay" id="loginForm" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            <form action="/" class="form-container">
                <h1>Logi sisse</h1>

                <input type="text" placeholder="E-maili Aadress" name="email" required>

                <input type="password" placeholder="Parool" name="password" required>

                <button type="submit" class="btn">Sisene</button>
                <button type="button" class="btn cancel"
                    onclick="document.getElementById('loginForm').style.display = 'none';">Close</button>
                <div>Pole kasutajat? <a style="color:#FAAB51"
                        onclick="document.getElementById('loginForm').style.display = 'none';document.getElementById('registerForm').style.display = 'block';">Registreeri
                        siin</a></div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.logo {
    margin-left: 50px;
}

h1 {
    float: right;
    font-size: 35px;
    margin-top: 10px;
    font-weight: bold;
    color: #FFFFFF;
}

input[type=text] {
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border: none;
}

/* LOGIN FORM  {box-sizing: border-box;} */

/* The popup form - hidden by default */
.modal-overlay {
    display: none;
    position: absolute;
    margin: 10% 0% 0% 40%;
    padding: 20px;
    border: 3px solid #f1f1f1;
    z-index: 9;
}

/* Add styles to the form container */
.form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
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
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
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