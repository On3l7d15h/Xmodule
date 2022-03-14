<script>

    /*
    *
        * importing...
     *
    */
    import { actualUser } from "../stores/Users";
    import Swal from "sweetalert2";

    /*
    *
        * Rendering vars...
     *
    */
    $: userData = {nombre: "", correo: "", contra: ""};

    /*
    *
        * Functions...
     *
    */
    const handleOnSubmit = ({ correo, contra }) => {
        if(correo !== "" && correo !== null){
            if(contra !== "" && contra !== null){
                actualUser.setUser(userData);
            } else {
                Swal.fire({ 
                    title: "Oops!", 
                    text: "There are empty imputs!",
                    icon: "error",
                });
            }
        } else {
                Swal.fire({ 
                title: "Oops!", 
                text: "There are empty imputs!",
                icon: "error",
           });
        }
    }
</script>

<div class="shadow w-25 my-4 bg-light h-50 rounded shadow">
    <form class="form-control h-100 d-flex flex-column align-items-center justify-content-center text-center" on:submit|preventDefault={handleOnSubmit(userData)}>
        <label class="fs-4 py-2">
            Email: <input class="form-control fs-5 my-2" type="email" valid="true" bind:value={ userData.correo }/>
        </label>
        <label class="fs-4 py-2">
            Password: <input class="form-control fs-5 my-2" type="password" bind:value={ userData.contra }>
        </label>
        <button class="btn btn-outline-primary fs-5 my-2">Send</button>
    </form>
</div>

<style>

</style>
