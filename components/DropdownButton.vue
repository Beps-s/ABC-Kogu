<template>
    <div class="dropdown" ref="dropdown">
        <a class="dropdown-toggle" role="button" @click="toggleDropdown">
            {{ username }}
        </a>
        <div class="dropdown-menu" :class="{ show: isOpen }" ref="dropdownMenu">
            <NuxtLink class="dropdown-item" @click="closeDropdown">
                Minu andmed
            </NuxtLink>
            <NuxtLink class="dropdown-item" to="/borrowedBooks" @click="closeDropdown">
                Minu laenutused
            </NuxtLink>
            <NuxtLink class="dropdown-item" to="/addBook" @click="closeDropdown">
                Lisa raamat
            </NuxtLink>
            <hr class="dropdown-divider" />
            <a class="dropdown-item" @click="logout">
                Logi välja
            </a>
        </div>
    </div>
</template>
  
<script setup>
const client = useSupabaseAuthClient()
const isAdmin = ref(false)

const { data: { user } } = await client.auth.getUser()
let metadata = user.user_metadata
let username = metadata.eesnimi + " " + metadata.perenimi
if (metadata.options) {
    isAdmin.value = metadata.options.super_admin
}

const logout = async () => {
    await client.auth.signOut()
    navigateTo('/')
}
</script>
  
<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen
        },
        closeDropdown() {
            this.isOpen = false
        },
        handleOutsideClick(event) {
            if (
                this.isOpen &&
                !this.$refs.dropdown.contains(event.target) &&
                !this.$refs.dropdownMenu.contains(event.target)
            ) {
                this.isOpen = false
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleOutsideClick)
    },
}
</script>
  
<style>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    color: black;
    text-decoration: none;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
}

.show {
    display: block;
}

a:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.dropdown-divider {
    margin: 0.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>