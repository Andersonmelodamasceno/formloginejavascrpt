 
        function myFunction() {
            let emailcorreto = "romario@gmail.com";
            let senhacorreta = "12345";
            
            let email = document.getElementById("form1").value;
            let password = document.getElementById("form2").value;
            let button = document.querySelector(".button");

            if (email === emailcorreto && password === senhacorreta) {
                document.getElementById("demo").innerHTML = "Bem vindo ao sistema: " + email;
                document.getElementById("demo").style.color = "orange";
                button.style.backgroundColor = "orange";
            } else {
                document.getElementById("demo").innerHTML = "Senhas ou Email incorretos.";
                document.getElementById("demo").style.color = "red";
                button.style.backgroundColor = "red";
            }
        }
   