
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyDyS-UNrPU5zG7KwhseyMQDzwfDzrl8YaY",
    authDomain: "login1-2898b.firebaseapp.com",
    projectId: "login1-2898b",
    storageBucket: "login1-2898b.appspot.com",
    messagingSenderId: "792804080976",
    appId: "1:792804080976:web:d46530a84fa7fb53a30055"
  };

  // Initialize Firebase
    const app=initializeApp(firebaseConfig)
    const register = document.getElementById("submit");
    const auth = getAuth();

    register.addEventListener("click", (event) => {
     event.preventDefault();
     const email= document.getElementById("email").value;
     const password= document.getElementById("password").value;
    
    
    
     
     console.log(email,password)
     createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed up 
         alert("success")
         window.location.href = "index.html"
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert(errorCode, errorMessage)})
         console.log(errorCode, errorMessage)
    })
    


