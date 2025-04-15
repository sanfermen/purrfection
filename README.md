# purrfection

¿Te vas de miaucaciones y necesitas que alguien se ocupe de tu michi mientras no estás? ¿Tu michi tiene necesidades especiales y buscas a alguien que pueda cuidarle durante unas horas?

¡Purrfection es tu solución!

Cuelga tu anuncio y encuentra purrfesionales que se adapten a tus peticiones.


## miembros
- [Dalila Cabrera](https://github.com/crdalila)
- [Sandra Fernández](https://github.com/sanfermen)
- [Cecilia Scaroni](https://github.com/Ceci222/)

Imagen descriptiva del equipo técnico durante este proyecto:
![alt text](https://i.imgflip.com/3u04h5.jpg?a484368)

## Tecnologías del proyecto
- Proyecto de BackEnd con metodología MVP (modelo vista controlador) con rutas
- Tres archivos por cada ruta y controlador: archivo para funciones de JavaScript, otro para render de vistas y otro para render de API
- Base de Gatos con MySQL, utilizando el programa workbench
- Proyecto dockerizado con Docker
- Librerías utilizadas: nodemon, bcrypt, express, express-session, pug, dotenv, mysql2 y sequelize
- Vistas generadas con pug
- Gestión de errores genéricos en utils


## PUESTA EN MARCHA
Para poner en marcha este proyecto, sigue los siguientes pasos:

### .ENV
Para que el proyecto sea funcional en tu ordenador, completa los datos solicitados en el **.env.example** y elimina el .example. ¡Ahora debería funcionar!
Datos en el interior del **.env**:
```js
DB_ROOT_PASSWORD=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

APP_PORT=
APP_HOST=
SESSION_SECRET=
```

### docker compose

Pon a funcionar la BBGG (base de gatos). Para ello, en la consola ejecuta el siguiente comando:
```
docker compose up --build
```
Este comando lee el package-json e instala todas las librerías que necesitamos para poner el proyecto en marcha. Una vez ejecutado el comando, guarda un archivo .js para que se actualice la consola y aparezca la frase: "Conexión con MYSQL hecha". ¡Ahora ya puedes utilizar el proyecto con normalidad!


¡Miauchas gracias!

![alt_text](https://assets.epuzzle.info/puzzle/086/127/original.jpg)

