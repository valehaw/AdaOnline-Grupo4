const base = "https://5fd39ad7e9cda40016f5b79f.mockapi.io/";


const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');


table.setAttribute('border', '1');

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);



fetch(`${base}users`)
    .then(response => {
        return response.json();
    })

    .then(data => {

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
