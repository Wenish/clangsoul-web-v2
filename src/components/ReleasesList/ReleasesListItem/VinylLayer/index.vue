<template>
    <div class="layer-vinyl"></div>
</template>

<style lang="stylus">

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
    transition: opacity  1.5s linear;
}

.layer-vinyl:hover {
    opacity: 0.3;
    animation:spin 12s linear infinite;
    background-image: url('~@/assets/vinylRecord.svg');
}

@keyframes spin {
    100% {
        transform:rotate(360deg);
    }
}
</style>