<template>
  <div class="floating-background-wrap">
    <!--
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
    </svg>
    -->
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
    <svg class="floating-background-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -20 40 50">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'FloatingBackground'
}
</script>

<style lang="stylus">
@require '~@/css/variables.styl'

random(min,max) {
  return floor(math(0, 'random')*(max - min + 1) + min)
}

.floating-background-wrap {
	position: fixed;
    bottom: 0;
	perspective-origin: 50% 50%;
    z-index -1000;
}

.floating-background-svg{
	position: fixed;
    bottom: -50vh;
	transform-style: preserve-3d;
}
for $i in 1..9 {
    $animationName = (raise- + $i)
    .floating-background-svg:nth-child({$i}) {
        left: (random(5,95))%
	    fill: rgba($color5, (random(20,30))%);
        animation: $animationName 615s linear infinite;
        animation-delay: (random(0,10))s;
        animation-duration: (random(11,21))s;
        transform: scale((random(10,30)))
    }
    
    @keyframes {$animationName} {
        to {
            bottom: 150vh;
            left: (random(5,95))%
        }
    }
}
</style>
