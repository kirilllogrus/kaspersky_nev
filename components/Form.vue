<template>
  <div class="form">
    <form v-on:submit.prevent="formSubmit" >
		<input type="text" v-model="title" value="title" name="title" placeholder="title" />
		<textarea type="text" v-model="text" name="text" placeholder="text" />
		<button type="submit">Submit</button> 
    </form>
  </div>
</template>
 
<script> 
	import axios from 'axios';

	export default {
		data: function(){
			return {
				title:"",
				text: "" 		
			}
		},
		methods: {
			formSubmit: function(e){
				let _this = this;
				let {title, text} = _this;
				 axios.post('/api/create', {title, text})
					.then(res=> {
						_this.title = "";
						_this.text = "";					
					});
			}
		}

	}
</script>
