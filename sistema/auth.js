import { auth } from "./firebase.js";
import { 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


window.login = function(){

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    signInWithEmailAndPassword(auth, email, senha)

    .then(() => {

        window.location.href = "dashboard.html";

    })

    .catch((error)=>{

        document.getElementById("mensagem").innerHTML =
        "E-mail ou senha incorretos";

        console.log(error);

    });

}
