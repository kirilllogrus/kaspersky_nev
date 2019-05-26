<template>
  <section class="container">
    	<div class="row">
  		<div class="col aside">
			<Sidebar />		
		</div>
		<div class="col content"> 
			<Table :headers="['Заголовок', 'Текст']" :dataset="dataset" />
		</div>
    	</div>
  </section>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Table from '~/components/Table.vue'; 
import axios from 'axios';

export default {
  components: {
    Sidebar,
    Table
  }, 
  data:function(){
	return{
		headers: ['Заголовок', 'Текст'],
		dataset: []
	}
  },
  methods: {
	getData(){
		 axios.get('/api/data')
			.then(res=>{
				console.log('===>', res);
				this._data.dataset = res.data;
			});	
	}
  },
  mounted: function(){
	this.getData();
  }
}
</script>
 

