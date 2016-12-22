<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view
        class="view">
      </router-view>
    </transition>
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
