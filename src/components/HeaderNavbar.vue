<template>
  <div class="header-navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
  name: 'HeaderNavbar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="stylus">
@require '../css/variables.styl'

.header-navbar {
    height 48px
    background-color $color2
}
</style>
