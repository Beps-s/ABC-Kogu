<!-- header -->
<template>
    <div>
        <header>
            <div class="header">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="../assets/images/logo.png">
                        <h1>ABC-Kogu</h1>
                    </NuxtLink>
                </div>
                <div class="col mx-auto px-4 input-group w-25">
                    <span class="input-group-text"><img src="../assets/images/MagnifyingGlass.png"></span>
                    <input class="form-control" placeholder="Otsi raamatut">
                </div>
                <div class="menu">
                    <div class="menu-item"><img src="../assets/images/UserCircle.png">
                        <div style="display: inline-block"
                            onclick="document.getElementById('registerForm').style.display = 'block';">Registeeri</div>
                    </div>
                    <div class="menu-item"><img src="../assets/images/UserCircle.png">
                        <div style="display: inline-block"
                            onclick="document.getElementById('loginForm').style.display = 'block';">Logi sisse</div>
                    </div>
                    <div class="menu-item"><img src="../assets/images/UserCircle.png">
                        <div style="display: inline-block"
                            onclick="document.getElementById('loginForm').style.display = 'block';">Profiil</div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <slot />
</template>

<script>

</script>

<style scoped>
.header {
    width: 100%;
    height: 50px;
    background-color: #FF9B42;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    margin-left: 50px;
}

h1 {
    float: right;
    font-size: 25px;
    margin-top: 15px;
    font-weight: bold;
    color: #FFFFFF;
}

input[type=text] {
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border: none;
}

.menu {
    margin-right: 50px;
    display: flex;
}

.menu-item {
    font-size: 15px;
    font-weight: bold;
}

</style>