<template>
  <div class=" font-Lexend">
    <l-map
      style="height: 100vh; width: 100vw"
      class="relative overflow-x-hidden"
      :zoom="zoom"
      centerboundsOfKenya
      :minZoom="6.5"
      :maxZoom="16"
      :center="centerboundsOfKenya"
      :maxBounds="bounds"
      :options="{ zoomControl: false }"
      :bounds="bounds"
      @ready="onLeafletReady"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-control-layers position="topright"></l-control-layers>
    <!-- <l-polygon
        :lat-lngs="polygon.latlngs"
        color="#5A352A"
        :fill="true"
        :fillOpacity="0.5"
        fillColor="#FF9F1C"
      ></l-polygon> -->

    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
 import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
  LPolygon,
  LIcon,
} from "@vue-leaflet/vue-leaflet";
import MarkerCluster from "./MarkerCluster.vue";
export default {
  props:{ showNotification:Boolean },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    MarkerCluster,
    LPopup,
    LPolygon,
    LIcon, 
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerLatLng: [51.504, -0.159],
      iconWidth: 35,
      iconHeight: 20,
      iconSize: 40,
      center: [-1.3092761076679664, 36.81418776512146],
      centerboundsOfKenya: [-1.3092761076679664, 36.81418776512146],
      southWestKenya: [-4.8995204, 33.9098987],
      northEastKenya: [4.62, 41.899578],
      bounds: [
        [-4.8995204, 33.9098987],
        [4.62, 41.899578],
      ],
      zoom: 11,
    };
  },
  methods: { },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1];
    },
    notifcationsShow(){
      console.log(" MAP NOTIFICATIONAS : ",this.showNotification)
    }
  },
  mounted() {
    
  },
  async beforeMount() {
    this.mapIsReady = true;
  },

  async onLeafletReady() {
    await this.$nextTick();
    this.leafletObject = this.$refs.map.leafletObject;
    this.leafletReady = true;

    new L.Toolbar2.DrawToolbar({
      position: "topleft",
    }).addTo(this.leafletObject);
  },
};
</script>

<style>
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  width: auto !important;
  border-radius:30px;  
}

.leaflet-container a.leaflet-popup-close-button {
  padding: 10px !important;
  margin: 10px !important;
  margin-right: 20px !important;
}
</style>
