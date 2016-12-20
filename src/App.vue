<template>
  <div>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
  @import "./styles/style";
</style>
