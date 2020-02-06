console.log('try!');
var formu = document.getElementById("myForm");
var spinner = document.querySelector(".spinner_show");
var resultado = document.querySelector("#resultado");


formu.addEventListener("submit", function(e){ 
   e.preventDefault();
    var formData = new FormData(formu);
    //console.log(formData);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if(xhr.readyState === 3){
            spinner.style.color = "#000";
            spinner.style.display = 'block';
            resultado.style.display = 'none';
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
            respuesta = xhr.response;
            console.log(respuesta);
            spinner.style.display = 'none';
            resultado.style.color = 'green';
            resultado.style.display = "block";
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            resultado.style.fontWeight = "bold";
            resultado.innerHTML = "Ready!";     
        }
    }
    xhr.open("POST","process.php",true);
    //xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formData);
    console.log(xhr.status);       
    formu.reset();
})

/**
 ** don't forget to activate your console to see the response
 */