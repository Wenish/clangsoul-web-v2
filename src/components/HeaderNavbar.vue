<template>
    <div class="grid-container">
        <div class="left"></div>
        <div class="middle">
            <router-link to="/">Home</router-link> |
            <router-link to="/sample-packs">Sample Packs</router-link>
        </div>
        <div class="right">
            <div class="avatar"></div>
        </div>
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
    grid-template-columns: $headerNavbarHeight 1fr $headerNavbarHeight;
    grid-template-rows: $headerNavbarHeight;
    gap: 0px 0px;
    grid-template-areas:"left middle right";
    background-color $color2
    border-bottom: 1px rgba($color1, 0.3) solid;
}

.left {
    grid-area: left;
}

.middle {
    grid-area: middle;
}

.right {
    grid-area: right;
    box-shadow: -1px 0px 3px 0px #0003;
}

.avatar {
    cursor: pointer;
    height: 100%;
    width: 100%;
    background-image: url('~@/assets/avatar.png');
    background-size: cover;
}

.avatar:hover {
    filter: grayscale(30%) contrast(110%);
}

</style>
