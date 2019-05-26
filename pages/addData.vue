<template>
  <section class="container">
    	<div class="row">
  		<div class="col aside">
			<Sidebar />		
		</div>
		<div class="col content">
			<Form />
		</div>
    	</div>
  </section>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Form from '~/components/Form.vue';
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios';

export default {
  components: {
    Sidebar,
    Form
  }, 
  methods:{
	logging: function(){
		axios.post('/api/logging')
			.then(res=>res.json())
			.then(data=>console.log('data'));

		}
  },
  created: function(){
	 
  }
}
</script>
 
