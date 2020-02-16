<template><!-- la barre de recherche ne fonctionne pas car je n'ai pas eu le temps de la faire fonctionner -->
  <div id="app">	

    <div class="div_left">
      <input type="text"/><button style="margin-left:10px;"><b>Search</b></button>
      <table>
        <tr>
          <td colspan="6">Search by keywords</td>
        </tr>
        <tr>
          <td colspan="2"></td> <td colspan="2"></td> <td colspan="2"></td>
        </tr>
        <tr>
          <td colspan="6" style="height: 150px;"></td>
        </tr>
      </table>
      <router-link to="/"><button style="margin-top:20px;"><b>Home</b></button></router-link>
    </div>
		
    <div class="div_right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}

</script>

<style>

	body{
        margin: 0;
		background-color: #3a3434;
	}
	
	table{
		margin: auto;
		margin-top: 30px;
	}
	
	td{
		width: 100px;
		height: 50px;
		border: solid black 1px;
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
	}
	
	.div_left{
		float: left;
		width: calc(30% - 3px);
		border-right: solid lime 3px;
		height: 100vh;
		background-color: white;
		position: fixed;
		text-align: center;
		padding-top: 50px;
	}
	
	.div_right{
		float:right;
		width: 70%;
		height: 100vh;
	}
	
	input{
		border-radius: 5px;
		border: solid lime 2px;
		border-bottom-color: green;
		border-right-color: green;
		width: 200px;
		height: 24px;
		transition: 0.5s;
		padding-left: 5px;
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
	}
	
	input:hover{
		border-radius: 5px;
		border: solid green 2px;
		border-bottom-color: lime;
		border-right-color: lime;
	}
	
	button{
		border: solid lime 2px;
		border-bottom-color: green;
		border-right-color: green;
		width: 100px;
		height: 30px;
		border-radius: 5px;
		transition: .25s;
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
	}
	
	button:hover{
		border: 0;
		color: white;
		animation: button_anim 5s forwards;
		background: linear-gradient(rgba(0,255,0,1), rgba(0,128,0,1));
		transform: scale(1.1,1.1);
	}
	
</style>