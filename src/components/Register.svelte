<script>
    /*
    *
        * importing...
     *
    */
    import { actualUser } from "../stores/Users.js";
    import Swal from "sweetalert2";

    /*
    *
        * Rendering vars...
     *
    */
    $: newUser = { nombre: "", correo: "", contra: "" };

    /*
    *
        * Functions...
     *
    */
    const handleOnSubmit = ({ nombre, correo, contra }) => {
        if(nombre !== "" && nombre !== null){
            if(correo !== "" && correo !== null){
                if(contra !== "" && contra !== null){
                    actualUser.registerUser(newUser);
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
        } else {
            Swal.fire({ 
                title: "Oops!", 
                text: "There are empty imputs!",
                icon: "error",
            });
        }
    }
</script>


<div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
    <h1 class="text-light">Register form!</h1>
    <br />
    <section class="shadow w-25 my-4 bg-light h-50 rounded shadow">
        <form class="form-control h-100 d-flex flex-column align-items-center justify-content-center text-center" on:submit|preventDefault={handleOnSubmit(newUser)}>
            <label class="fs-4 py-2">
                Username: <input class="form-control fs-5 my-2" type="text" valid="true" bind:value={ newUser.nombre }/>
            </label>
            <label class="fs-4 py-2">
                Email: <input class="form-control fs-5 my-2" type="email" valid="true" bind:value={ newUser.correo }/>
            </label>
            <label class="fs-4 py-2">
                Password: <input class="form-control fs-5 my-2" type="password" bind:value={ newUser.contra }>
            </label>
            <button class="btn btn-outline-primary fs-5 my-2">Send</button>
        </form>
    </section>
</div>



<style>

</style>
