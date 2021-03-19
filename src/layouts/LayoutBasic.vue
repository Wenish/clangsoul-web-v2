<template>
  <HeaderNavbar />
  <div class="content">
    <router-view />
  </div>
  <FloatingBackground />
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FloatingBackground from '@/components/FloatingBackground'

export default {
  name: 'LayoutBasic',
  components: {
    HeaderNavbar,
    FloatingBackground
  }
}
</script>

<style lang="stylus" scoped>
.content {
  padding 20px
}
</style>
