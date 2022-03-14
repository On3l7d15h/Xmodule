<script>
	
	import { Link  } from "svelte-routing";
	import { actualUser } from "../../stores/Users.js";
	import { events } from "../../stores/Methods.js";
	import { onMount } from "svelte"; 

	$: subjects = [...$actualUser.subjects ]


</script>

<div class=" w-100 h-75 p-2 bg-light rounded shadow d-flex flex-column justify-content-center align-items-center">

{#if subjects.length != 0 }

<section class="w-100 h-100 overflow-auto">
	<h1 class="text-primary text-center my-2">Your Subjects!</h1>     
		<table class="table table-hover table-striped rounded">
  		<thead class="bg-primary bg-opacity-50 text-light">
	    	<tr>
	      	<th scope="col" class="fs-5 text-center">#</th>
	      	<th scope="col" class="fs-5 text-center">Title</th>
	      	<th scope="col" class="fs-5 text-center">Grade</th>
	     		<th scope="col" class="fs-5 text-center">Anglo saxon</th>
	    	  <th scope="col" class="fs-5 text-center">Action</th>
	    	</tr>
	  	</thead>
	  	<tbody class="text-center">
	    	{#await subjects }
					<p> waiting...  </p>
					{:then results }
		    		{#each results  as subject, index}
				    	<tr class="text-center">
				      		<th scope="row" class="fs-5 my-4 align-middle">{index+1}</th>
				      		<td class="fs-5 my-4 align-middle">{subject.materia}</td>
				      		<td class="fs-5 my-4 align-middle">{subject.nota}</td>
				      		<td class="fs-5 my-4 align-middle">{subject.anglosajón}</td>
				      		<td class="fs-5 my-4"><button class="btn btn-outline-danger" on:click={events.deleteSubject($actualUser, subject._id)}><i class="ri-delete-bin-2-line fs-4"></i></button></td>
				    	</tr>
			    	{/each}
		    	{:catch error}
		    	<h1> There's a problem... {error}</h1>
	    	{/await}
	  	</tbody>
		</table>
	</section>

{:else}

<h1 class="text-center"> Oh are you new? or do you deleted all your subjects...? </h1>
  <br />
<h3> Don't worry, you can always createa a new subjects! </h3>
 <br />
<Link to="/myPlace/createSubject" class="btn btn-outline-success fs-5 text-decoration-none" ><i class="ri-add-box-line"></i></Link>    			

{/if}


</div>
