<template>
  <div class="home">
    <StreamLinks />
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import StreamLinks from '@/components/StreamLinks.vue'

export default {
  name: 'Home',
  components: {
    StreamLinks
  }
}
</script>
