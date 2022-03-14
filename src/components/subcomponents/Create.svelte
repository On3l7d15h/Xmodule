<script>

    /*
    *
        * importing...
     *
    */
    import { actualUser } from "../../stores/Users.js";
    import { events } from "../../stores/Methods.js";
    import Swal from "sweetalert2";

    /*
    *
    * Rendering varear...
     *
    */

    function angloValue (note) {
        let nota = parseInt(note);
        if(nota >= 90){
            subject.anglosajón =  "A";
        } else if(nota >= 80 && nota <= 89){
            subject.anglosajón = "B";
        } else if(nota >= 70 && nota <= 79){
            subject.anglosajón =  "C";
        } else {
            subject.anglosajón =  "F";
        }
    }

    $: subject = {
        materia: "",
        nota: "",
        anglosajón: "",
    }


    $: userData = {
        _id_usuario: $actualUser.id,
        correo: $actualUser.correo
    }
    /*
    *
        * Functions...
     *
    */
    const handleOnSubmit = ({ _id_usuario, materia, nota, anglosajón }) => {
        if(materia !== "" && materia !== null){
            if(nota !== "" && nota !== null){
                if(anglosajón !== "" && anglosajón !== null){
                    events.createNewSubject(subject, userData);
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
    <h1 class="text-light">Create a new subject</h1>
    <p class="text-light">In this part, you can create some subjects! Enjoy </p>
    <section class="shadow w-25 my-4 bg-light h-50 rounded shadow">
        <form class="form-control h-100 d-flex flex-column align-items-center justify-content-center text-center" on:submit|preventDefault={ handleOnSubmit(subject) }>
            <label class="fs-4 py-2">
                Subject: <input class="form-control fs-5 my-2" bind:value={ subject.materia }/>
            </label>
            <label class="fs-4 py-2">
                Grade: <input class="form-control fs-5 my-2" bind:value={ subject.nota } on:change={ angloValue(subject.nota) } />
            </label>
            <label class="fs-4 py-2">
                Anglo Saxo: <input class="form-control fs-5 my-2" bind:value={ subject.anglosajón } disabled/>
            </label>
            <button class="btn btn-outline-primary fs-5 my-2">Create</button>
        </form>
    </section>
</div>

<style>

</style>
