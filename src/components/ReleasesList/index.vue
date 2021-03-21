<template>
  <Loader v-if="isLoading" />
  <div class="grid-container-releases">
    <ReleasesListItem
      v-for="obj in releases"
      :key="obj.title"
      :show="obj.show"
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
import Loader from '@/components/Loader'
import api from '@/api'

export default {
  name: 'ReleasesList',
  components: {
    ReleasesListItem,
    Loader
  },
  data: function () {
    return {
      isLoading: true,
      releases: {}
    }
  },
  methods: {
    delayedShow (obj, idx) {
      const delay = 250 * idx
      setTimeout(() => {
        obj.show = true
      }, delay)
    }
  },
  async mounted() {
    const releases = await api.releases.get();
    for (let releaseKey in releases) {
      releases[releaseKey].show = false
    }
    this.isLoading = false;
    this.releases = releases;

    Object.keys(this.releases).forEach((key, index) => {
      const obj = this.releases[key]
      this.delayedShow(obj, index)
    });
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
