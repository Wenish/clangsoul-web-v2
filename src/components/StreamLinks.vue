<template>
  <div class="container">
      <div class="item" v-for="item in items" :key="item.text">
          <div v-is="item.icon" size="34"></div>
          <a :href="item.link" target="_blank">{{item.text}}</a>
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
</style>
