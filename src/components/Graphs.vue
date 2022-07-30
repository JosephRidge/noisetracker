<template>
  <div class="my-2 w-full lg:w-4/6 h-full transition 
  ease-in-out duration-150 rounded-md border-2 hover:border-lightPurple">
 
      <highcharts 
        :options="chartOptions"  :constructor-type="Spline" class="h-full bg-lightPurple p-2 rounded-md"></highcharts>
   
  </div>
</template>

<script> 
import { Chart } from "highcharts-vue";
import { getDatabase, ref,  onValue } from "firebase/database";

export default {
  props: ["data","payload"],
  components: { 
    highcharts: Chart,
  },
  data() {
    return {
      dataValues:[],
      chartOptions: {
        series: [
          {
              data:this.data.deviceData,
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

    getData(){
      this.data.deviceData = this.data.deviceData
      
      
   },
    getDataFromFRDB() {    
      const db = getDatabase(); 
      const dtaRef = ref(db, "devices/node_strathmore");
      onValue(dtaRef, (snapshot) => {
        const data = snapshot.val();
        let keys = Object.keys(data);
        
        let lvlData = []
        for (let i = 0; i < keys.length; i++) {
          let k = keys[i];
          let values = data[k];  
          lvlData.push(values.level) 
        }      
        }); 
  },
  },
  mounted() {
    this.setData();
    this.getData();
    
    //   this.getDataFromFRDB()
    // }
  },
};
</script>

<style>
.highcharts-title {
  background: gray !important;
  height:100% !important;
}
</style>
