<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <img src="../assets/images/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        ABC-Kogu
      </NuxtLink>
      <form class="group d-flex mx-4" style="min-width: 50%;">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
            </path>
          </g>
        </svg>
        <input class="input form-control me-2" type="search" placeholder="Otsing" aria-label="Search" v-model="search"
          @input="$emit('search', search)">
      </form>
      <div class="d-flex">
        <div v-if="!user" class="menu-item mr-4">
          <a @click="showRegisterModal = true"><img src="../assets/images/UserCircle.png">Registreeri</a>
        </div>
        <div v-if="!user" class="menu-item">
          <a @click="showLoginModal = true"><img src="../assets/images/UserCircle.png">Logi sisse</a>
        </div>
        <div v-else class="menu-item mr-4">
          <img src="../assets/images/UserCircle.png">
          <DropdownButton />
        </div>
      </div>
    </div>
  </nav>
  <loginModal v-show="showLoginModal" @close-modal="onCloseModal" @change-modal="showLoginModal = !showLoginModal, showRegisterModal = !showRegisterModal"/>
  <registerModal v-show="showRegisterModal" @close-modal="showRegisterModal = false" @change-modal="showRegisterModal = !showRegisterModal, showLoginModal = !showLoginModal" />
</template>
  
<script setup>
const user = useSupabaseUser()
const search = useState('search')

</script>

<script>
import loginModal from '~/components/loginModal.vue'
import registerModal from '~/components/registerModal.vue'
import DropdownButton from '@/components/DropdownButton.vue'

export default {
  components: { loginModal, registerModal, DropdownButton },
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
    }
  },
  methods: {
    onCloseModal() {
      this.showLoginModal = false
      this.showRegisterModal = false
    },
  },
}
</script>
  
<style scoped>
.navbar {
  background-color: #FF9B42;
  font-weight: bold;
  margin-bottom: 30px;
  z-index: 999;
}

.navbar-brand {
  color: #fff;
}

.mr-4 {
  margin-right: 1rem;
}

.menu-item {
  color: black;
}

a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
}

.input {
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #000000;
  transition: .3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgb(252, 133, 28);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(139, 99, 45, 0.1);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
</style>