<template>
  <ReleasesListItem
    v-for="obj in releases"
    :key="obj.title"
    :title="obj.title"
    :artist="obj.artist"
    :linkYoutube="obj.linkYoutube"
    :linkSoundcloud="obj.linkSoundcloud"
    :linkAppleMusic="obj.linkAppleMusic"
    :linkSpotify="obj.linkSpotify"
  />
</template>

<script>
import ReleasesListItem from './ReleasesListItem'
import api from '@/api'

export default {
  name: 'ReleasesList',
  components: {
    ReleasesListItem
  },
  data: function () {
    return {
      releases: {}
    }
  },
  async mounted() {
    this.releases = await api.releases.get();
    console.log('releases', this.releases)
  }
}
</script>

<style scoped lang="stylus">
</style>
