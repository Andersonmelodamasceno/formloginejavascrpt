async function myFunction(){
let email = document.getElementById("form1").value;
let password = document.getElementById("form2").value;

const data = { email: email, password: password };

const response = await fetch("https://localhost:7273/api/Login/PostTesteLogin", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin", 
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", 
  referrerPolicy: "no-referrer", 
  body: JSON.stringify(data),
});
   responseJson = await response.json();
  setTimeout( async function(){
 
	   let button = document.querySelector(".button");
	    
       if (responseJson.result == "sucesso") {
                document.getElementById("demo").innerHTML = "Bem vindo ao sistema: " + email;
                document.getElementById("demo").style.color = "orange";
                button.style.backgroundColor = "orange";
            } else {
                document.getElementById("demo").innerHTML = "Senhas ou Email incorretos.";
                document.getElementById("demo").style.color = "red";
                button.style.backgroundColor = "red";
            }
  },2000);
} 