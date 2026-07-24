async function generateQR() {

    const text = document.getElementById("text").value;

    if(text==""){

        alert("Please enter text");

        return;
    }

    try{

        const response = await fetch("http://localhost:5000/generate",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                text:text
            })

        });

        const data = await response.json();

        document.getElementById("qrImage").src=data.qr;

    }

    catch(error){

        alert("Cannot connect to backend.");

    }

}