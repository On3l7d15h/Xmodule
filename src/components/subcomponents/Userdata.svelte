<script>

	import { events  } from "../../stores/Methods.js";
	import { actualUser } from "../../stores/Users.js";
	export let data;

</script>


<div class="bg-light rounded-2 shadow p-2 w-25 h-75 text-center m-3 d-flex flex-column justify-content-center align-items-center">
  <h1>Hey, <span class="rounded p-1 bg-primary bg-opacity-75 fs-bold text-light fs-2">{data.nombre}</span></h1>
	<h5>This is your place! </h5>

	<br />
	<p> it's so simple, but i invite you to check out this small site. :P </p>

	<br />
<button on:click={ events.youAreConnected($actualUser.nombre) } class="btn btn-outline-success"><i class="ri-wifi-fill"></i></button>
	
	<br />
  <h5 class="text-muted">Developed by On3l7d15h</h5>
</div>

<style>
	
</style>
