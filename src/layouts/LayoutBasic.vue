<template>
  <HeaderNavbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'

export default {
  name: 'LayoutBasic',
  components: {
    HeaderNavbar
  }
}
</script>

<style lang="stylus" scoped>
.content {
  padding 20px
}
</style>
