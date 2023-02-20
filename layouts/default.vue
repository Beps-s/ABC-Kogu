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
          <div v-if="!loggedIn" class="menu-item">
            <a @click="showRegisterModal = true"><img src="../assets/images/UserCircle.png">Registreeri</a>
          </div>
          <div v-if="!loggedIn" class="menu-item">
           <a @click="showLoginModal = true"><img src="../assets/images/UserCircle.png">Logi sisse</a>
          </div>
          <div class="menu-item"><img src="../assets/images/UserCircle.png">
            <a>Profiil</a>
          </div>
        </div>
      </div>
    </header>
  </div>
  <slot/>
<loginModal v-show="showLoginModal" @close-modal="showLoginModal = false" />
<registerModal v-show="showRegisterModal" @close-modal="showRegisterModal = false" />
</template>

<script>
import loginModal from '~/components/loginModal.vue'
import registerModal from '~/components/registerModal.vue'

export default {
  components: {loginModal, registerModal },
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
    }
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
  cursor: pointer;
}

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