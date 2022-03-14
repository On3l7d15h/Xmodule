/*
*
	* importing
 *
*/

import { writable } from "svelte/store";
import { navigate } from "svelte-routing";
import { actualUser } from "./Users.js"
import swal from "sweetalert2";

const { env } = process;
/*
*
	* functions
 *
*/

const pageMethods = () => {

	const { subscribe, set, update } = writable(false);

	/*
	*
		* returning
	 *
	*/

	return {
		subscribe, 
		notAllowed: () => {			
			swal.fire({
				title: "Sorry...",
				text: "You are not connected... Do you have an user?",
				icon: "error"
			})
		},
		infoApp: () => {
			swal.fire({
				title: "SvelteXmodules v.1.0",
				text: "version 1.0, the first version of the app! Enjoy, it's no responsive!",
				icon: "info"
			})
		},
		youAreConnected: (user) => {
			swal.fire({
				title: "Connected!",
				text: `In this moment you are connected! with this user: ${user}`,
				icon: "info"
			});
		},
		createNewSubject: (subject, user) => {
			fetch(`https://${env.URL_FETCH}/${user.correo}`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({_id_usuario: user._id_usuario, materia: subject.materia, 
					nota: subject.nota, anglosajón: subject.anglosajón })
			})
                .then(() => {
                	swal.fire({
                    	title: "Created Successfully",
                    	text: "Your new subject was created successfully",
                    	icon: "success"
                    })
                })
                .then(() => {
                    
                    setTimeout(() => {
                    	actualUser.addSubjects(user);
                    }, 1000)
                    
                })
                .catch(() => {
                    swal.fire({
                        title: "Sorry...",
                        text: "Something went wrong... try later",
                        icon: "error"
                    })
                })
		},
		deleteSubject: (user, id) => {
			fetch(`https://${env.URL_FETCH}/${user.correo}`, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({_id: id})
			})
        .then(() => {
            swal.fire({
                title: "Delete Successfully",
                text: "Your subject was delete",
                icon: "success"
            })
         })
        .then(() => {
             actualUser.addSubjects(user)	        
        })
        .catch(() => {
             swal.fire({
                 title: "Sorry...",
                 text: "Something went wrong... try later",
                 icon: "error"
             })
        })
		}
	}

};

/*
*
	* exporting
 *
*/

export const events = pageMethods();
