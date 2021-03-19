<template>
    <div class="grid-container">
        <div class="left"></div>
        <div class="right">
            <div class="item-background" :style="{ background: `url('https://source.unsplash.com/500x300/?nature,water,${Math.floor(Math.random() * 500) + 1}') center center / cover no-repeat` }"></div>
            <div class="item-content">
                <!--
                <div class="links">
                    <a icon v-if="linkYoutube" :href="linkYoutube" target="_blank">Youtube</a>
                    <a icon v-if="linkSoundcloud" :href="linkSoundcloud" target="_blank">Soundcloud</a>
                    <a icon v-if="linkAppleMusic" :href="linkAppleMusic" target="_blank">Apple Music</a>
                    <a icon v-if="linkSpotify" :href="linkSpotify" target="_blank">Spotify</a>
                </div>
                -->
                <div class="artist-name">{{artist}}</div>
                <div class="title">{{title}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ReleasesListItem',
  components: {
  },
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
@require '~@/css/variables.styl'

.grid-container {
    color: $color5
    // text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.56);
    margin: 10px;
    border: 1px solid #0003;
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 300px;
    gap: 0px 0px;
    grid-template-areas:
        "left right";
}
.left {
    grid-area: left;
    background #131313
    border-right: 1px solid #ffffff36;
}
.right {
    grid-area: right;
    position relative
    background: $color2;
}

.item-background {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    filter: sepia(.8);
}

.item-content {
    position relative;
    background: linear-gradient(45deg,rgba(0,0,0,.8),hsla(0,0%,89.8%,0));
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: self-end;
    text-align: left;
}

.artist-name {
    padding: 0 10px 5px;
    font-size 12px
}

.title {
    font-weight bold
    font-size: 20px
    letter-spacing: .02em
    line-height: 1
    padding: 0 10px 20px;
}

.links > a {
    padding 5px
}

</style>
