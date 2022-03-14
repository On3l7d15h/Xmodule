<script>
	/*
	*
		* importing...
	 *
	*/
	import { Link } from "svelte-routing";
	import swal from "sweetalert2";
	import { actualUser } from "../stores/Users.js";
	import { events } from "../stores/Methods.js";

	/*
	*
		* Functions...
	 *
	*/

	const handleOnClick = () => {
		events.infoApp();
	}


</script>

<!-- 
	--
	   hey, do not disturb about the code... XD, it's only bootstrap...
	--
-->
<div class="grid-breakpoints w-100 d-flex flex-row justify-content-between p-2 shadow bg-light">

<!-- 
	--
	   Span of the navbar component
	--
-->
	<span on:click={handleOnClick} class="p-2 bg-primary bg-opacity-75 fw-bold text-light btn fs-5">Xmodule</span>

<!-- 
	--
	   The side of the links, another part of the Component...
	--
-->
	<nav class="d-flex flex-row justify-content-evenly">
		
		{#if $actualUser.correo !== ""}
		<!--
			--
				Our part
			--
		-->
<Link to="/myPlace" class="btn btn-outline-primary fs-5  text-decoration-none" ><i class="ri-home-4-line"></i></Link>
			<Link to="/myPlace/createSubject" class="btn btn-outline-primary fs-5  mx-2 text-decoration-none" ><i class="ri-add-box-line"></i>
</Link>
			<button on:click={actualUser.logOut} class="btn btn-outline-danger fs-5"><i class="ri-logout-box-line"></i></button>

		{:else}

			<Link to="/" class="btn btn-outline-primary fs-5  mx-2 text-decoration-none "><i class="ri-login-box-line"></i></Link>
			<Link to="/register" class="btn btn-outline-primary fs-5  mx-2 text-decoration-none "><i class="ri-user-add-line"></i></Link>
			<button on:click={events.notAllowed} class="btn btn-outline-danger fs-5  mx-2 text-decoration-none"><i class="ri-wifi-off-line"></i></button>

		{/if}
	</nav>
</div>

<style></style>
