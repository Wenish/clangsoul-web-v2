<template>
    <div class="item">
        <div class="title">{{title}}</div>
        <div>{{artist}}</div>
        <div class="links">
            <a icon v-if="linkYoutube" :href="linkYoutube" target="_blank">Youtube</a>
            <a icon v-if="linkSoundcloud" :href="linkSoundcloud" target="_blank">Soundcloud</a>
            <a icon v-if="linkAppleMusic" :href="linkAppleMusic" target="_blank">Apple Music</a>
            <a icon v-if="linkSpotify" :href="linkSpotify" target="_blank">Spotify</a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ReleasesListItem',
  props: [
    'title',
    'artist',
    'linkYoutube',
    'linkSoundcloud',
    'linkAppleMusic',
    'linkSpotify'
  ]
}
</script>

<style scoped lang="stylus">
.item {
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
}

.title {
    font-weight bold
}

.links > a {
    padding 5px
}
</style>
