const cep = document.querySelector("#cep")

const showData = (result) => {
    // veio como obj
    // usar for in
    for(const campo in result) {
        const element = document.querySelector("#"+campo)
        // ver se o campo existe
        if(element) {
            element.value = result[campo]
        }
    }
}

 

cep.addEventListener("blur", (e) => {
    
    let search = cep.value.replace("-", "")

    const options = {
        method: "GET",
        mode: 'cors',
        cache: 'default'
    }


    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then( data => showData(data))
        })
        .catch( e => console.log("deu erro: "+ e.message))

})

