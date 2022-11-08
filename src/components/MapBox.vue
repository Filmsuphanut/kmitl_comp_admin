<template>
    <div id="map" />
  </template>  

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        'pk.eyJ1Ijoicnl1aW53MTIzIiwiYSI6ImNsODV5M21odjB0dXAzbm9lZDhnNXVoY2UifQ.IiTAr5ITOUcCVjPjWiRe1w';
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
      });
      map.on('load', () => {
      // TODO: Here we want to load a layer
      // TODO: Here we want to load/setup the popup
      });
    });
    return {};
  },
};

//https://medium.com/swlh/use-mapbox-popups-with-vue-3-7b454387d0d2
</script>

<style>
#map {
  height: 100vh;
}
</style>
