# RESUMEN:
Se realiza una aplicación web sencilla utilizando conocimientos de HTML, CSS y JAVASCRIPT como lenguaje de programación para impulsar un CRUD, mismo que se ejecuta de manera local con almacenamiento "LOCAL STORAGE" con la interfaz de inicio de sesión. 


## DESCRIPCIÓN:
Se trabaja sobre la idea general de utilizar el registro de Agenda de los Programadores integrado a una aplicación web con más desarrollo a futuro, sentando las bases en este registro. 

La plataforma se tiene pensada y considerada para modificar la tecnología actual utilizada (HTML,CSS,JS) al obtener más conocimiento y pasarlo a ser una Aplicación Web impulsada por REACT y NODEJS para el FrontEnd/BackEnd respectivamente unificando la información en MySQL como gestor de base de datos.

Una vez generada la aplicación con el cambio de LocalStorage por la conexión a MySQL, en la aplicación, en REACT se haría uso de AUTH0 como plataforma de identidad multiplataforma reduciendo tiempos de producción y brindando un buen soporte integrado en ciberseguridad.


## FUNCIONAMIENTO CRUD:
La aplicación web actual tiene un trabajo de Crear (Create // función 'guardar') que toma los datos de los diferentes input por id cargando dichos datos mediante JSON.parse al almacenamiento local. 

De igual manera se utiliza la lectura (Read // función 'render') que permite visualizar los datos obtenidos del almacenamiento local mediante un inner.hmtl en una tabla de contenido con los respectivos botones para editar o borrar el elemento seleccionado. 

Así mismo permite editar la información (Upgrade // función 'editar') permitiendo actualizar y editar los datos obteniendo los datos del almacenamiento local visualizandolos en los input para modificar dicha información.

Una vez que tenemos los datos nuevamente registrados en los input (Upgrade 2 // función 'reguardar') permitirá volver a guardar la información para su lectura en renderizado).

En caso de haber seleccionado la edición por error o validar que los datos eran correctos, se puede retornar a la lectura sin modificar la información con la función salir. 

En caso de no querer una entidad (desarrollador) se puede eliminar (Delete // función 'eliminar') permitirá borrar los datos del almacenamiento local, renderizando la nueva lista sin el elemento seleccionado para su eliminación. 


## DESCRIPCIÓN DE INTERPRETACIÓN ERD - CRUD APP
Un solo Desarrollador (Developer // Entidad con Atributos fijos) puede tener conocimiento de al menos 1 o muchos Lenguajes y/o Tecnologías.

Un Lenguaje o Tecnología (LandorTech // Entidad con Atributos fijos) puede tener ninguno o muchos Desarrolladores que lo conozcan.
