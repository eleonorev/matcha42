<template lang="html">
  <div class="Header">
    <h1 class="Header-logo">
      This is title
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
  .Header {
      display: block;
      position: relative;
      width: 100%;
      text-align: center;
  }

  .Header-logo {
      display: inline-block;
      text-align: center;
      border-bottom: 4px solid #eee;
  }
</style>
