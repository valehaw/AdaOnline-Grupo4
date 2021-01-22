const infoErased = document.getElementById('erase-info');
const infoEdited = document.getElementById('employeeUpdated'); 



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
        editBtn.setAttribute('data-target', '#editemployee');
        
        deleteBtn.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`;
        deleteBtn.setAttribute('data-toggle', 'modal');
        deleteBtn.setAttribute('data-target', '#deleteemployee');


        //botones EDITAR & BORRAR
        deleteBtn.addEventListener("click", () => {
            infoErased.value = row.id;
        });

        editBtn.addEventListener('click', () => {
            infoEdited.value = row.id;
            getEmployee(row.id);
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





/************* FUNCION PARA EDITAR EMPLEADO **************/

const employeeData = () => {
  
    const employeeFullname = document.getElementById('fullname');
    const employeeEmail = document.getElementById('email');
    const employeeAddress = document.getElementById('address');
    const employeePhone = document.getElementById('phone');
   

    const fullname = employeeFullname.value;
    const email = employeeEmail.value;
    const address = employeeAddress.value;
    const phone = employeePhone.value;
    return { fullname, email, address, phone }
}


//Función para mostrar los datos del empleado elegido
const employeeInfo = (data) => {
    employeeFullname.value = data.fullname;
    employeeEmail.value = data.email;
    employeeAddress.value = data.address;
    employeePhone.value = data.phone;
}


const employeeFullname = document.getElementById('newfullname');
const employeeEmail = document.getElementById('newemail');
const employeeAddress = document.getElementById('newaddress');
const employeePhone = document.getElementById('newphone');



const employeeDataUpdated = () => {
    const fullname = employeeFullname.value;
    const email = employeeEmail.value;
    const address = employeeAddress.value;
    const phone = employeePhone.value;
    return { fullname, email, address, phone }
}


//Para EDITAR empleado seleccionado
const getEmployee = (id) => {
    fetch(`${base}users?id=${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            employeeInfo(data[0]);
        })
}


const employeeModified = (id) => {
    fetch(`${base}users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(employeeDataUpdated())
    })
        .then(response => {
            if (response) {
                location.href = 'index.html';
            }
            return response.json()
        })
}


const btnSubmitEdited = document.getElementById('btn-employeeUpdated');

btnSubmitEdited.addEventListener('click', () => {
    const infoEdited = document.getElementById('employeeUpdated');
    employeeModified(infoEdited.value);
});