<template>
  <table class="table_data">
    <tr v-for="(item, index) in dataset" v-bind:key="index">
      <td>{{item.title || item.type || '-'}}</td>
      <td>{{item.text || formatDate(item.date) || '-'}}</td> 
    </tr>
  </table>
</template> 

<script>
  export default {
    props: {
      dataset: {
        default: function () {
          return [
            {}, {}, {}, {}, {}, {}, {}, {}, {}
          ]
        }
      },
      headers: {
        default: function () {
        return  [
            "Событие",
            "Тип события",
          ]
        }
      },
      page: {
        default: 1
      },
      pageSize:{
        default: 20
      }
    },
    data:function (){
      return {
        
      }
    },
    methods:{
	addZero: function (i) {
	  if (i < 10) {
	    i = "0" + i;
	  }
	  return i;
	},
	formatDate: function(date){
		date = new Date(date); 
		if(date){
			date = `${this.addZero(date.getHours())}.${this.addZero(date.getMinutes())}.${this.addZero(date.getSeconds())} - ${this.addZero(date.getDate())}.${this.addZero(date.getMonth() + 1)}.${this.addZero(date.getFullYear())}`;
		}
		return date;
	}
    }

  }
</script>

<style>
	.table_data{
	    width: 100%;
	}
	td{
		text-align:center;
		padding:10px;		
	}
</style>
