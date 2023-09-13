Crear useState donde guardar datos con objeto por defecto.

Crear input con su tipo que guardará en el set lo que hay ya en el objeto y la clave valor con e.target.value y dentro de un objeto { }.

Crear función de guardar datos en local con local.storage.setItem("clave", valor). 
*Si el valor es tipo texto se guarda con el valor con JSON.stringify(nombreDeLaVariable).

Dentro de la función guardar datos se iguala a vacio el set setVariable(""). Para que limpie los datos una vez los haya guardado.

Crea botón que llame a la función guardar datos para iniciar sesión.

Para borrar el contenido de los input una vez guardado en local. Se hace una lógica básica dentro de la etiqueta: {datosUsuario.nombre ?? ""} Se pregunta por la variable.clave ?? si ya existe se limpia dejando vacio "".

Crea el resto de funciones necesarias (eliminar datos, recuperar datos).
*En limpiar datos se debe especificar la clave que has puesto al guardar los datos.
*Al recuperar datos si son tipo texto se crea una constante que especifica la clave del loclaStorage.getItem(clave) que voy a devolver y se cambian los datos con JSON.parse(constante).

Añade el input tipo contraseña.