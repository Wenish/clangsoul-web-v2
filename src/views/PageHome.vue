<template>
  <StreamLinks />
  <ReleasesList />
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
