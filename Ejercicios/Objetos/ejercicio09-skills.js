// Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
// Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

var usuario = {
    id: 123456789,
    name: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    skills: ["HTML", "CSS", "SASS"],
  };
  
  // codea aca la solucion
  
  let newSkill = "Javascript";
  usuario.skills.push(newSkill);

  
  // despues de la solucion
  console.log(usuario);
  // deberia mostrar
  // { id: 123456789,
  //   name: 'Ada Lovelace',
  //   url: 'https://www.linkedin.com/in/ada-lovelace',
  //   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }
  