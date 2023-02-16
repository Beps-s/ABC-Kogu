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
          <div v-if="!loggedIn" class="menu-item"><img src="../assets/images/UserCircle.png">
            <div style="display: inline-block"
                 @click="showRegisterModal = true; showLoginModal = false; showProfileModal = false;">Registeeri
            </div>
          </div>
          <div v-if="!loggedIn" class="menu-item"><img src="../assets/images/UserCircle.png">
            <div style="display: inline-block;"
                 @click="showLoginModal = true; showRegisterModal = false; showProfileModal = false;">Logi sisse
            </div>
          </div>
          <div class="menu-item"><img src="../assets/images/UserCircle.png">
            <div style="display: inline-block;"
                 @click="showProfileModal = true; showLoginModal = false; showRegisterModal = false;">Profiil
            </div>
          </div>
        </div>
      </div>
    </header>
    <loginModal v-show="showLoginModal" @close-modal="showLoginModal = false"
                @show-registerModal="showRegisterModal = true"/>
    <registerModal v-show="showRegisterModal" @close-modal="showRegisterModal = false"
                   @show-loginModal="showLoginModal = true"/>
    <profileModal v-show="showProfileModal" @close-modal="showProfileModal = false"/>
  </div>
  <slot/>
</template>

<script>
import loginModal from '~/components/loginModal.vue'
import registerModal from '~/components/registerModal.vue'
import profileModal from '~/components/profileModal.vue'

export default {
  components: {loginModal, registerModal, profileModal},
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      showProfileModal: false,
    }
  },
}
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