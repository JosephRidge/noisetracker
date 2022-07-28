<template>
  <div class="my-2 w-full lg:w-4/6 h-full transition 
  ease-in-out duration-150 rounded-md border-2 hover:border-lightPurple">
      <highcharts
        :options="chartOptions" class="h-full bg-lightPurple p-2 rounded-md"></highcharts>
   
  </div>
</template>

<script> 
import { Chart } from "highcharts-vue";
export default {
  props: ["data"],
  components: { 
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
              data: this.data.deviceData,
              "color":"#6700ee", 

          },
        ],
        title: {
          text: this.data.deviceID,
          style:{
          "color":"#6700ee",
           fontSize:"20px",
           fontWeight:"bold",
          }
        },
        subtitle: {
          text:this.data.deviceDetail,  
           style:{
           color:"#bebcff",
           fontSize:"16px",
          }
        }, 
      },
    };
  },

  methods: {
    setData() {
      this.chartOptions.title = "Are you ready ! ";
    },
  },
  mounted() {
    this.setData();
  },
};
</script>

<style>
.highcharts-title {
  background: gray !important;
  height:100% !important;
}
</style>
