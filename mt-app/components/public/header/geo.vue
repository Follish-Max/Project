<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{ $store.state.geo.position.city }}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
    [开封 中牟县 郑州]
  </div>
</template>
<script>

</script>
<style lang="css">

</style>
