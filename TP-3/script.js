const infoErased = document.getElementById('erase-info');


const base = "https://5fd39ad7e9cda40016f5b79f.mockapi.io/";


fetch(`${base}users`)
    .then(response => response.json()
    )
    .then(data => {
        tableInfo(data)
        actionsSection()    
    })


/************* Creación de tabla: INFO REQUERIDA Y BOTONES EDIT / DELETE **************/

const table = document.getElementById('list');
const tbody = document.querySelector('tbody');


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
        tr.setAttribute('id', user.id) //para poder borrar empleado
       
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
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#edituser');

        deleteBtn.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`;
        deleteBtn.setAttribute('data-toggle', 'modal');
        deleteBtn.setAttribute('data-target', '#deleteuser');

    
        deleteBtn.addEventListener("click", () => {
            infoErased.value = row.id;
        });

        tableData.appendChild(editBtn);
        tableData.appendChild(deleteBtn);
        row.appendChild(tableData);
    })
}


/************* FUNCION PARA BORRAR EMPLEADO **************/

const delBtn = document.getElementById('del-user');

const userErased = (id) => {
    fetch(`${base}users/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response) {
                location.href = 'index.html';
            }
            return response.json()
        })
        
};

// evento del botón DELETE = YES, IM SURE
delBtn.addEventListener('click', () => {
    const infoErased = document.getElementById('erase-info');
    userErased(infoErased.value);
});



