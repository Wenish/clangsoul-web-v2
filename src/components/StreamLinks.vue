<template>
  <div class="container">
      <div class="item" v-for="item in items" :key="item.text">
        <a class="button-icon" :href="item.link" target="_blank">
          <div v-is="item.icon" :size="iconSize"></div>
        </a>
      </div>
  </div>
</template>

<script>
import IconApple from '@/components/IconApple'
import IconInstagram from '@/components/IconInstagram'
import IconSoundcloud from '@/components/IconSoundcloud'
import IconSpotify from '@/components/IconSpotify'
import IconYoutube from '@/components/IconYoutube'

export default {
    name: 'StreamLinks',
    components: {
      IconApple,
      IconInstagram,
      IconSoundcloud,
      IconSpotify,
      IconYoutube
    },
    data: () => ({
        iconSize: 32,
        items: [
          {
            icon: 'IconInstagram',
            color: 'white darken-2',
            text: 'Instagram',
            link: 'https://www.instagram.com/johnvolo/'
          },
          {
            icon: 'IconYoutube',
            color: 'red darken-2',
            text: 'Youtube',
            link: 'https://www.youtube.com/clangsoul'
          },
          {
            icon: 'IconSpotify',
            color: 'teal darken-2',
            text: 'Spotify',
            link: 'https://open.spotify.com/artist/2UMPXGNnurwP45ae7lPdAG'
          },
          {
            icon: 'IconApple',
            color: 'grey darken-1',
            text: 'Apple Music',
            link: 'https://music.apple.com/us/artist/clangsoul/1488679288'
          },
          {
            icon: 'IconSoundcloud',
            color: 'orange darken-2',
            text: 'Soundcloud',
            link: 'https://soundcloud.com/clangsoul'
          }
          /*
          {
            icon: 'mdi-facebook',
            color: 'blue darken-2',
            text: 'Facebook',
            link: 'https://www.facebook.com/clangsoul'
          }
          */
        ]
    })
}
</script>

<style scoped lang="stylus">
@require '~@/css/variables.styl'

.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.item {
  padding 10px 5px
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-icon {
  background-color $color1
  border-radius 50%
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-icon:hover {
  background-color rgba($color1, 0.8)
}
</style>
