<template>
  <div class="grid-container-releases">
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
  </div>
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
.grid-container-releases {
  display: grid;
  max-width: 1800px;
  grid-template-columns repeat(5, 1fr)
  margin: auto;
}

@media screen and (max-width: 1900px) {
  .grid-container-releases {
    max-width: 1440px;
    grid-template-columns repeat(4, 1fr)
  }
}

@media screen and (max-width: 1500px) {
  .grid-container-releases {
    max-width: 1080px;
    grid-template-columns repeat(3, 1fr)
  }
}

@media screen and (max-width: 1150px) {
  .grid-container-releases {
    max-width: 720px;
    grid-template-columns repeat(2, 1fr)
  }
}

@media screen and (max-width: 800px) {
  .grid-container-releases {
    max-width: 360px;
    grid-template-columns repeat(1, 1fr)
  }
}
</style>
