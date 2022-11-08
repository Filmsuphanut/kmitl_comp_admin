<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MapBox/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MapBox from '@/components/MapBox.vue'

export default {
  name: 'MapViews',
  components: {
    MapBox,
  }
}
</script>
