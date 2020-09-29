boton = document.querySelector("#btnDes");
img = document.querySelector("#imgNasa");

async function llamada(){
    response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=as5WFPmwaMAqi6q8zhX1bxxRVcz6Enj513ubdc1b"
    );
    console.log(response);
    img.src = response.data.url;
}
boton.onclick = llamada