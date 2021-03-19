<template>
  <StreamLinks />
  <div class="container-releases">
    <ReleasesList />
    just vibe
  </div>
</template>

<script>
// @ is an alias to /src
import StreamLinks from '@/components/StreamLinks.vue'
import ReleasesList from '@/components/ReleasesList'

export default {
  name: 'Home',
  components: {
    StreamLinks,
    ReleasesList
  }
}
</script>

<style lang="stylus" scoped>
.container-releases {
  max-width: 450px;
  margin auto
}
</style>
