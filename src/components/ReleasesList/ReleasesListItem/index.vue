<template>
    <div v-if="show" class="grid-container-releases-item">
        <div class="left">
            <div class="link-list">
                <a class="link-youtube" v-if="linkYoutube" :href="linkYoutube" target="_blank">
                    <IconYoutube size="36" />
                </a>
                <a class="link-soundcloud" v-if="linkSoundcloud" :href="linkSoundcloud" target="_blank">
                    <IconSoundcloud size="36" />
                </a>
                <a class="link-apple" v-if="linkAppleMusic" :href="linkAppleMusic" target="_blank">
                    <IconApple size="36" />
                </a>
                <a class="link-spotify" v-if="linkSpotify" :href="linkSpotify" target="_blank">
                    <IconSpotify size="36" />
                </a>
            </div>
        </div>
        <div class="right">
            <div class="item-background" :style="{ background: `url('https://source.unsplash.com/500x300/?nature,water,fire,${Math.floor(Math.random() * 500) + 1}') center center / cover no-repeat` }"></div>
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
            <div class="layer-vinyl"></div>
        </div>
    </div>
</template>

<script>
import IconApple from '@/components/IconApple'
import IconSoundcloud from '@/components/IconSoundcloud'
import IconSpotify from '@/components/IconSpotify'
import IconYoutube from '@/components/IconYoutube'

export default {
  name: 'ReleasesListItem',
  components: {
      IconApple,
      IconSoundcloud,
      IconSpotify,
      IconYoutube
  },
  props: [
    'show',
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

.grid-container-releases-item {
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
    animation fadeIn 2s ease
}
.left {
    grid-area: left;
    background #131313
    border-right: 1px solid #ffffff36;
    z-index 15
}
.right {
    grid-area: right;
    position relative
    background: $color2;
}

.link-list {
    display: flex;
    flex-direction: column;
}

.link-list > a {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.link-list > a:hover {
    background-color rgba(($color1), 0.2)
}

.link-youtube {
    border-bottom: 1px solid #d32f2f;
}

.link-soundcloud {
    border-bottom: 1px solid #bd6205;;
}

.link-apple {
    border-bottom: 1px solid #757575;
}

.link-spotify {
    border-bottom: 1px solid #388e3c;
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
    z-index: 15;
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

.layer-vinyl {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 10;
    background-repeat: no-repeat;
    background-position: center;
    background-image none;
    opacity: 0;
    transition: all  1.5s linear;
    pointer-events: none;
    animation:spinForward 12s linear infinite;
    animation-play-state: paused;
    background-image: url('~@/assets/vinylRecord.svg');
}

.right:hover > .layer-vinyl 
    opacity: 0.3;
    animation-play-state: running;
</style>
