<template>
  <HeaderNavbar />
  <div class="content">
    <router-view />
  </div>
  <FloatingBackground />
  <img class="mountains" src="@/assets/mountains.png" />
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

.mountains {
  position: fixed;
  bottom: -12vh;
  left: 0;
  width: 100%;
  z-index: -2;
  filter: sepia(0.8);
}
</style>
