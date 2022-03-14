<script>
	//Views
	import Home from "./components/Home.svelte";
	import Register from "./components/Register.svelte"
	import My from "./components/My.svelte" 
	import Navbar from "./components/Navbar.svelte"
	import Create from "./components/subcomponents/Create.svelte"
	//import Router, route...
	import { Router, Route } from "svelte-routing";
</script>

<div class="main bg-primary bg-opacity-75">
	<Router>
		<Navbar />
		<Route path="/" component="{Home}" />
		<Route path="/register" component="{Register}" />
		<Route path="/myPlace" component="{My}" />
		<Route path="/myPlace/createSubject" component="{Create}" />
	</Router>
</div>

<style>
	/*
	*
		* A little bit of css code
	 *
	*/

	.main
	{
		position: fixed;
		width: 100%;
		height: 100%;
	}
</style>
