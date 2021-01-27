const infoErased = document.getElementById('erase-info');
const infoEdited = document.getElementById('employeeUpdated'); 
const myForm = document.getElementById('myForm');




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
        }).catch(function (error){
            console.error(error);
        })
        
};

// evento del botón DELETE = YES, IM SURE
delBtn.addEventListener('click', () => {
    const infoErased = document.getElementById('erase-info');
    userErased(infoErased.value);
});



/************* FUNCION PARA EDITAR EMPLEADO **************/



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
        }).catch(function (error){
            console.error(error);
        })
}

//actualizar los datos
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
        }).catch(function (error){
            console.error(error);
        })
}


const btnSubmitEdited = document.getElementById('btn-employeeUpdated');

btnSubmitEdited.addEventListener('click', () => {
    const infoEdited = document.getElementById('employeeUpdated');
    employeeModified(infoEdited.value);
});







// /************* FUNCION PARA AGREGAR EMPLEADO **************/

// const employeeData = () => {
  
//     const employeeFullname = document.getElementById('fullname');
//     const employeeEmail = document.getElementById('email');
//     const employeeAddress = document.getElementById('address');
//     const employeePhone = document.getElementById('phone');
   

//     const fullname = employeeFullname.value;
//     const email = employeeEmail.value;
//     const address = employeeAddress.value;
//     const phone = employeePhone.value;
//     return { fullname, email, address, phone }
// }



// myForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     //const formData = new FormData(this);

//     fetch(`${base}users`, {
//         method: 'POST',
//         body: JSON.stringify(employeeData()),
//         headers:{
//             "Content-Type": "application/json"
//         }
//     }).then(function (response){
//         if (response) {
//             location.href = 'index.html';
//         }
//         return response.json();
//     }).then(function (json){
//         console.log(json);
//     }).catch(function (error){
//         console.error(error);
//     })

// });




// /************* VALIDACIÓN DE FORMULARIO ADD **************/

function validation(){

 
        let username = document.getElementById('fullname').value;
        let useremail = document.getElementById('email').value;
        let useraddress = document.getElementById('address').value;
        let userphone = document.getElementById('phone').value;
        
        
        //regex101.com
        let usercheck = /^[A-Za-z. ]{1,50}$/; 
        let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        let addresscheck = /[a-zA-Z0-9_+-]{1,60}/;
        let phonecheck = /[\s-\d]{8,}/;
    



    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML="";
    }else{
        document.getElementById('usererror').innerHTML="** The Username is Invalid!";
        return false;
    }


    if(emailcheck.test(useremail)){
        document.getElementById('emailerror').innerHTML="";
    }else{
        document.getElementById('emailerror').innerHTML="** The Email is Invalid!";
        return false;
    }

    if(addresscheck.test(useraddress)){
        document.getElementById('addresserror').innerHTML="";
    }else{
        document.getElementById('addresserror').innerHTML="** The Address is Invalid!";
        return false;
    }

    if(phonecheck.test(userphone)){
        document.getElementById('phoneerror').innerHTML="";
    }else{
        document.getElementById('phoneerror').innerHTML="** The Phone Number is Invalid!";
        return false;
    }

}





/************* Creación de FILTRO **************/

$('#search-input').on('keyup', function() {
    let value = $(this).val()
    console.log(value);
    let users = searchTable(value, tableInfo);

    tableInfo(users);  
});

function searchTable(filter){

    let search = true ? "fullname" : "email";

    fetch(`${base}users?${search}=${filter}`)
        .then(response => 
            response.json())
        .then(data => {
            tableInfo(data);
            actionsSection(); 
        }).catch(function (error){
            console.error(error);
        })
}
 





// /************* VALIDACIÓN DE FORMULARIO ADD: no es con expresiones regulares **************/

// const validForm = document.getElementById('myForm');
// const validFullname = document.getElementById('fullname');
// const validEmail= document.getElementById('email');
// const validAddress = document.getElementById('address');
// const validPhone = document.getElementById('phone');

// validForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {
//     //trayendo los values de los inputs

//     const fullnameValue = fullname.value.trim();
//     const emailValue = email.value.trim();
//     const addressValue = address.value.trim();
//     const phoneValue = phone.value.trim();

//     if(fullnameValue === ''){
//         //mostrar error
//         //agregar el error class
//         setErrorFor(validFullname, 'Fullname cannot be blank');
//     }else{
//         //agregar la success class
//         setSuccessFor(validFullname);
//     }
// }

// function setErrorFor(input, message){
//     const formGroupInput = input.parentElement; // .form-group-input
//     const small = formGroupInput.querySelector('small'); 

//     //agregar el mensaje de error dentro de la etiqueta small
//     small.innerText = message; 

//     //agregar el error class
//     formGroupInput.className = 'form-control-input error';
// }


