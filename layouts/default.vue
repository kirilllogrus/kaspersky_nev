<template>
  <div>
    <nuxt/>
  </div>
</template>


<script>
	import axios from 'axios';
	export default {
		methods:{
			logging: function(){
				axios.post('/api/logging')
					.then(res=>console.log("logging",res));
			}
		},
		mounted: function(){
			this.logging();
			console.log('mounted and loggee')
		}
	}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


.nav{
	text-align:left;
	padding:0px;
}

.nav li{
	padding:10px 15px;
}
.container {
	    position: relative;
	    display: flex;
	    min-height: 95vh;
	    justify-content: center; 
	    border: 1px solid;
	    margin: 20px;
	    height: auto;

}

.row{
	display:flex;
	height: 100%;
	width: 100%;
	padding: 20px;
	position:relative;
}

.col>div, .col>aside{
	border: 1px solid;
	margin: 0px 20px;
	padding:20px;	
	min-height: 90vh;
}
.content{
	flex-grow:1
}
.aside{
	max-width: 200px;
}
li{
	list-style:none;
}

form{
    display: flex;
    justify-content: space-around;
    max-width: 501px; 
    flex-direction: column;
    height: 200px;
    margin: auto;
}
.links {
  padding-top: 15px;
}

button{
	background: transparent;
	display:block;
	border-radius:3px;
	border: 1px solid #000;
	padding: 10px 20px;
	width: 100px;
	text-align:center;
	cursor: pointer;
}

input, textarea{
	border: 1px solid #000;
	border-radius: 3px;
	padding: 10px 20px;
}
</style>

