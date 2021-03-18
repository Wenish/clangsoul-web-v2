<template>
  <HeaderNavbar />
    <router-view />
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import api from '@/api'

api.releases.get();

export default {
  name: 'LayoutBasic',
  components: {
    HeaderNavbar
  }
}
</script>
