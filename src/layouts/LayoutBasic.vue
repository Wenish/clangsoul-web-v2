<template>
  <!--
  <HeaderNavbar />
  -->
  <div class="content">
    <router-view />
    <BaseFooter />
  </div>
  <FloatingBackground />
  <div class="mountains" src="@/assets/landscape.svg"></div>
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FloatingBackground from '@/components/FloatingBackground'
import BaseFooter from '@/components/BaseFooter.vue'

export default {
  name: 'LayoutBasic',
  components: {
    HeaderNavbar,
    FloatingBackground,
    BaseFooter
  }
}
</script>

<style lang="stylus" scoped>
.content {
  padding 20px
}

.mountains {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1000000;
    background-size: cover;
    background-image url('~@/assets/landscape.svg');
    opacity 0.2
}
</style>
