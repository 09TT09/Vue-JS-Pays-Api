<template>
  <div>
    <div class="div_global">
	
      <h1 style="text-align:center;font-family:Arial;color:white;">Countries</h1>
      <div v-for="name in names" :key="name.id" class="div_name" @mouseover="dataCountryName = name.name ">	

        <div class="title_country_div">
          <span v-bind:title="name.name"><b>{{ name.name }}</b></span>
        </div>

        <img v-bind:src="name.flag" v-bind:alt="name.name + ' flag'" width="" height="60px" style="border:solid black 1px;margin-bottom: 10px;" onclick="add()"/><br>
		
        <div id="a0" style="color:black"></div>

        <router-link :to="{ name: 'CountryPage', params: { dataCountryName } }">
          <button v-on:click="dataCountryName = name.name "><b>Infos</b></button>
        </router-link>

      </div>

    </div>
  </div>
</template>

<script>

const axios = require('axios').default;
//let setformId = 0;

export default {
  name: 'HomePage',
  data(){
    return{
      names: null,
      dataCountryName: ''
    }
  },
  mounted(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( response => (this.names = response.data ) )	  
  },
  methods:{
  },
  beforeMount(){
  }
}

</script>

<style>
	
	.div_global{
		width: calc( 200px * 4 + 10px * 8 + 2px * 8);
		margin: auto;
	}
	
	.title_country_div{
		height: 35px;
		line-height: 35px;
		margin-bottom: 15px;
		background: linear-gradient(rgba(0,255,0,1), rgba(0,128,0,1));
		color: white;
		overflow: hidden;
	}

	.div_name{
		border-radius: 0px;
		border: solid black 2px;
		display: inline-block;
		width: 200px;
		height: 170px;
		background-color:white;
		font-family: Arial;
		margin: 10px;
		text-align: center;
		overflow: hidden;
		box-shadow: 4px 4px 4px black;
		transition: 0.25s;
	}
	
	.div_name:hover{
		transform: scale(1.02,1.02);
	}

</style>