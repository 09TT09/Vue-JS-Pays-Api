<template>
  <div class="first_div">
    <span>Nom des fleurs : </span>
	<span class="fleurs">{{ fleurs.name }} <div class="fleurs_type"> {{ fleurs.type }}</div></span>
  </div>
</template>

<script>

export default {
  name: 'MonComposant',
  props: {
    fleurs: String,
	type: String,
	fullName: Object
  },
  data(){
    return{
	}
  }
}

</script>

<style scoped>

.first_div{
	text-align: left;
	margin: auto;
	width: 50%;
}

.fleurs{
	color: blue;
}

.fleurs_type{
	display: inline-block;
	text-align: right;
	color: red;
}

</style>
