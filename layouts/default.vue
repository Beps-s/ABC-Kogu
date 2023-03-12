<template>
    <div>
        <Header @search="search = search" />
        <NuxtPage :search-value="search" />
    </div>
</template>
  
<script setup>
const search = useState('search')

</script>