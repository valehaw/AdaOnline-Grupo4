const base = "https://5fd39ad7e9cda40016f5b79f.mockapi.io/";

fetch(`${base}users`)
    .then(response => {
        return response.json();
    })

    .then(data => {

        for (user of Object(data)){
            console.log(data);          
        }

    })
