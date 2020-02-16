<template>
  <div>
	
    <div class="country_div" v-for="country in infoCountry" :key="country.id" style="color:white;text-align:center;">
      <h1 style="text-align:center;font-family:Arial;color:">{{ country.name }}</h1>
      <img v-bind:src="country.flag" v-bind:alt="country.name + ' flag'" height="250px;" style="border:solid black 1px;display: block;margin: auto;margin-bottom: 10px;" onclick="add()"/><br>

      <h2 style="color: white;font-size: 30px;">Informations</h2>

      <h2>Territory</h2>

      <p><b>Region : </b><span>{{ country.region }}</span><br>
      <b>Country subdivision : </b><span>{{ country.subregion }}</span><br>
      <b>Capital : </b><span>{{ country.capital }}</span><br>
      <b>Timezones : </b><span v-for="timezone in country.timezones" :key="timezone.id">{{ timezone + ' ' }}</span><p/>

      <h2>Demographic</h2>

      <p><b>Population : </b><span>{{ country.population }} inhabitants</span><br>
      <span style="color:white;" v-if="GiniShowSpan"><b>Gini coefficient (inequality among values) : </b><span id="gini">{{ country.gini }} %</span><br></span>
        <b>Languages : </b><span v-for="language in country.languages" :key="language.id">{{ language.name + ' ' }}</span><br></p>

     <h2>Currencies</h2>

     <div v-for="currency in country.currencies" :key="currency.id">
       <p><b>Currency : </b><span>{{ currency.name }}</span><br>
       <b>Symbol : </b><span>{{ currency.symbol }}</span></p>
     </div>
	</div>

  </div>
</template>

<script>

const axios = require('axios').default;

export default {
  name: 'CountryPage',
  props: ['dataCountryName'],
  data(){
    return{
      infoCountry: null,
      save: "",
      GiniShowSpan: true,
    }
  },
  mounted(){
    this.persistantsProps()
    axios
      .get('https://restcountries.eu/rest/v2/name/' + this.save)
      .then( response => (this.infoCountry = response.data ) ) 
    //this.GiniShow()
  },
  methods:{
    persistantsProps: function (){  // J'ai essayé de faire une fonction pour sauvegarder la valeur de	"dataCountryName" dans les props dans une variable "save" pour que le contenu se réaffiche au rechargement de la page sans succès
      if (this.save != undefined){
        this.save = this.dataCountryName;
      }
    },
    /*GiniShow: function (){
      if (this.$refs.gini.innerText != " %"){
        this.GiniShowSpan = false;
      }
    }*/
  },
  afterMounted(){
  }
}

</script>

<style>

	h2{
		color: orange;
	}

	.country_div span{
		color: lime;
	}
	
</style>