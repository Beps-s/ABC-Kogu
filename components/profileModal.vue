<template>
  <!-- profile menu -->
  <div class="form-popup" id="profileMenu" style="border: solid #f1f1f1; z-index: 9;
  background-color: #FFFFFF;" @click="$emit('close-modal')">
    <div>
      <div style="float: right; font-size: 30px" @click="$emit('close-modal')">X</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>