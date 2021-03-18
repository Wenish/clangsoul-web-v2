<template>
  <HeaderNavbar />
    <router-view />
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import apiReleases from '@/api/apiReleases'

apiReleases.getReleases();

export default {
  name: 'LayoutBasic',
  components: {
    HeaderNavbar
  }
}
</script>
