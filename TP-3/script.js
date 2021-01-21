const base = "https://5fd39ad7e9cda40016f5b79f.mockapi.io/";


fetch(`${base}users`)
    .then(response => response.json()
    )
    .then(data => {
        tableInfo(data)
        actionsSection()    
    })


/************* Creación de tabla: INFO REQUERIDA Y BOTONES EDIT / DELETE **************/

const tableInfo = (users) => {
    document.getElementById('tbody').innerHTML = "";
    
    for (let prop in users) {
     
        const user = users[prop];
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const email = document.createElement('td');
        const address = document.createElement('td');
        const phone = document.createElement('td');

    
        name.innerHTML = user.fullname;
        email.innerHTML = user.email;
        address.innerHTML = user.address;
        phone.innerHTML = user.phone;
    
       
        tr.appendChild(name);
        tr.appendChild(email);
        tr.appendChild(address);
        tr.appendChild(phone);

        tbody.appendChild(tr);
    }
}



const actionsSection = () => {
    const rows = tbody.childNodes;

    rows.forEach(row => {

        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const tableData = document.createElement('td');
        
        editBtn.innerHTML = `<i class="material-icons" title="Edit">&#xE254;</i>`;
        deleteBtn.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`;
      
        tableData.appendChild(editBtn);
        tableData.appendChild(deleteBtn);
        row.appendChild(tableData);
    })
}