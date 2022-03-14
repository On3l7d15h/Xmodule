<!-- Scripts -->
<script> 

	/*
	*
		* importings
	 *
	*/
	
	import { onMount } from "svelte";
	import { navigate } from "svelte-routing";
	import { actualUser } from "../stores/Users.js";
	import Userdata from "./subcomponents/Userdata.svelte";
	import Table from "./subcomponents/Table.svelte";

	/*
	*
		* UseEffect of svelte
	 *	
	*/
	onMount(() => {

		if($actualUser.nombre === "" || $actualUser.nombre === null){
			navigate("/", { replace: true });
		}
	});
	/*
	*
		* Vars!
	 *	
	*/

</script>

{#if $actualUser.correo !== ""}

	<div class="container w-100 h-100 d-flex flex-row justify-content-evenly align-items-center">
		<Userdata data={$actualUser} />
		<Table />
	</div>

{:else}

	<h1>More or less</h1>	

{/if}


<style>
	

</style>
