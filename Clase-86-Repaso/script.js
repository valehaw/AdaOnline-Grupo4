
const user = {
    name: "Matias",
    email: "asd@asd.com",
    password: "asd123"
};

const pet = {
    name: "Zeta"
}



/***************** PARA POST ********************/

// fetch('https://ada-frontend-618c2-default-rtdb.firebaseio.com/users.json', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "Application/json"
//     },
//     body: JSON.stringify(user)
// }).then((response) => {
//     console.log(response);
// });




/***************** PARA GET ********************/

fetch('https://ada-frontend-618c2-default-rtdb.firebaseio.com/users/-MRMiBSlr0UkPjbmYfLO.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
