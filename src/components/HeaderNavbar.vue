<template>
    <div class="grid-container">
        <div class="left"></div>
        <div class="middle">
            <router-link to="/">Home</router-link> |
            <router-link to="/sample-packs">Sample Packs</router-link>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
  name: 'HeaderNavbar'
}
</script>

<style scoped lang="stylus">
@require '../css/variables.styl'

.grid-container {
    display: grid;
    grid-template-columns: 48px 1fr 48px;
    grid-template-rows: 48px;
    gap: 0px 0px;
    grid-template-areas:"left middle right";
    background-color $color2
}

.left { grid-area: left; }

.middle { grid-area: middle; }

.right { grid-area: right; }

</style>
