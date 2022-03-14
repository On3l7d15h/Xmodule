//imports
import { writable } from "svelte/store";
import { navigate } from "svelte-routing";
import swal from "sweetalert2";

const { env } = process;

// funciones

const handleUserActive = () => {
    const { subscribe, set, update } = writable({id: "", nombre: "", correo: "", contra: "", subjects: []});


    return {
        subscribe,
        setUser: (user) => {
            swal.fire({
                title: "Xmodule v1.0",
                text: "In this moment, the page are chargin the data, please wait a few moment",
                icon: "info"
            })
            fetch(`https://${env.URL_FETCH}/${user.correo}`)
                .then((res) => res.json())
                .then((data) => {
                    if(data){
                        if(user.contra === data.user.contra){
                            user.nombre = data.user.nombre;
                            user.id = data.user._id;
                            user.subjects = data.user_subjects;
                            update((t) => t = user);
                            navigate("/myPlace", {replace: true});
                        } else {
                            swal.fire({
                                title: "Sorry...",
                                text: "There no exists the user... or the email or pass it's wrong",
                                icon: "error"
                            })
                        }
                    }
                    
                })
                .catch(() => {
                    swal.fire({
                        title: "Sorry...",
                        text: "There no exists the user... or the email or pass it's wrong",
                        icon: "error"
                    })
                })
        },
        registerUser: (newUser) => {
            fetch(`https://${env.URL_FETCH}`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(() => {
                    swal.fire({
                        title: "Successful!",
                        text: "Your user was register successfully!",
                        icon: "success"
                    })
                    .then(() => setTimeout(() => { navigate("/", {replace: true}) }
                        , 1000)
                    )
                .catch(() => {
                    swal.fire({
                        title: "Oops!",
                        text: "We have problems, we can not register your user, please try again in a while",
                        icon: "error"
                    })
                })
            })
        },
        addSubjects: (user) => {
            fetch(`https://${env.URL_FETCH}/${user.correo}`)
                .then((res) => res.json())
                .then((data) => {
                    update((us) => us = { ...us, subjects: data.user_subjects});
                    navigate("/myPlace", {replace: true});  
                })
        },
        logOut: () => {
            set({nombre: "", correo: "", contra: ""})
            navigate("/", { replace: true });
        }
    }
}

/*
*
    variables 
 *
*/

export const actualUser = handleUserActive();
