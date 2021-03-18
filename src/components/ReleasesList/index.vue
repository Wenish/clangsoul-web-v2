<template>
  <div>Releases Component</div>
</template>

<script>
import api from '@/api'

export default {
  name: 'ReleasesList',
  async mounted() {
    const data = await api.releases.get();
    console.log('releases', data)
  }
}
</script>

<style scoped lang="stylus">
</style>
