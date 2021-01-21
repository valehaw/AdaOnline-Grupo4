const base = "https://5fd39ad7e9cda40016f5b79f.mockapi.io/";


const section = document.getElementById('tcontainer');

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');


// table.setAttribute('border', '1');

table.appendChild(thead);
table.appendChild(tbody);
section.appendChild(table);



fetch(`${base}users`)
    .then(response => {
        return response.json();
    })

     .then(data => {   
        const trHead = document.createElement('tr');
        
        for(prop in Object(data)[0]){
            th = document.createElement('th');
            th.innerHTML = prop;
            trHead.appendChild(th);
        }
        thead.appendChild(trHead);


        for (user of Object(data)){
            const tr = document.createElement('tr');

            for(prop in user){
                const td = document.createElement('td');
                td.innerHTML = user[prop];

                tr.appendChild(td);
            }
            tbody.appendChild(tr);            
        }

    })

    .catch(error => console.log("error en GET /users: " + error));



