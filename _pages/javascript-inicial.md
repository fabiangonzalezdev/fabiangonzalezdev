---
layout: page  
title: Javascript Inicial
image: '/assets/img/27.webp'  
---

JavaScript es uno de los lenguajes más utilizados en el desarrollo web moderno. Dominar sus fundamentos te permitirá crear aplicaciones dinámicas e interactivas, además de comprender el funcionamiento interno de la web. En este curso, recorreremos desde los principios básicos hasta temas avanzados como la asincronía y el manejo del DOM.

***

Este curso incluye *cheatsheets* para tener los conceptos clave a la mano, además de ejercicios prácticos para cada módulo:

* [Cheatsheet Fundamentos de Javascript](https://github.com/emasatodev/javascript-cheatsheet/tree/main/01-javascript-inicial)
* [Ejercicios de Fundamentos de Javascript](https://github.com/emasatodev/javascript-ejercicios/tree/main/01-javascript-inicial)

***

# Javascript Inicial

#### Introducción a JavaScript

1. [¿Por qué aprender JavaScript?](#por-que-aprender-javascript)  
2. [¡Hola Mundo! en Mac](#hola-mundo-en-mac)  
3. [¡Hola Mundo! en Windows](#hola-mundo-en-windows)  
4. [Anatomía de una variable](#anatomia-de-una-variable)  
5. [Tipos de datos en JavaScript](#tipos-de-datos-en-javascript)  
6. [Creación de strings](#creacion-de-strings)  
7. [Operadores aritméticos](#operadores-aritmeticos)  
8. [Conversión de tipos: Type Casting y Coerción](#conversion-de-tipos-type-casting-y-coercion)  
9. [Transformación de datos: Conversión explícita e implícita](#conversion-de-tipos-explicita-e-implicita)  

#### Estructuras de Control y Lógica

10. [Comparación de valores en JavaScript](#operadores-de-comparacion)  
11. [Uso de operadores lógicos](#operadores-logicos)  
12. [Condicionales: Estructura if](#ejecucion-condicional-if)  
13. [Desafío práctico: Adivina el número](#ejercicio-adivina-el-numero)  
14. [Alternativas condicionales: switch](#ejecucion-condicional-switch)  
15. [Ciclos iterativos: for](#loop-for)  
16. [Recorriendo colecciones con for of](#loop-for-of)  
17. [Iterando propiedades con for in](#loop-for-in)  
18. [Bucles condicionales: while](#loop-while)  
19. [Ejecutando ciclos con do while](#loop-do-while)  

## Funciones y el contexto *this*

20. [Estructura de una función en JavaScript](#anatomia-de-una-funcion)  
21. [Diferencias entre funciones y métodos](#funciones-vs-metodos)  
22. [Funciones puras e impuras: qué son y cuándo usarlas](#funciones-puras-e-impuras)  
23. [Arrow functions y el enlace léxico de *this*](#arrow-function-y-enlace-lexico)  
24. [Contexto de ejecución y cadena de ámbito (*scope chain*)](#contextos-de-ejecucion-y-scope-chain)  
25. [Entendiendo los *Closures* en JavaScript](#que-es-closure)  
26. [Preguntas a expertos: ¿Por qué adentrarse en el desarrollo web?](#preguntas-a-desarrolladores-senior-por-que-aprender-desarrollo-web)  

## Manipulación de Arrays

27. [Conceptos básicos sobre Arrays](#introduccion-a-arrays)  
28. [Mutabilidad e inmutabilidad en listas](#mutabilidad-e-inmutabilidad-de-arrays)  
29. [Agregar y eliminar elementos con push() y pop()](#modificacion-basica-del-final-con-push-y-pop)  
30. [Mapeo e iteración de datos con map() y forEach()](#iteracion-con-map-y-foreach)  
31. [Filtrado y reducción de colecciones: filter() y reduce()](#filtrado-y-reduccion-con-filter-y-reduce)  
32. [Búsqueda eficiente con find() y findIndex()](#busqueda-de-elementos-con-find-y-findindex)  
33. [Duplicando arrays con slice()](#crear-copias-con-slice)  
34. [Spread operator: Aplicaciones prácticas](#spread-operator-casos-de-uso)  

## Programación Orientada a Objetos

35. [Estructura de un Objeto en JavaScript](#anatomia-de-un-objeto)  
36. [Manipulación y creación de objetos](#trabajando-con-objetos-en-javascript)  
37. [Funciones constructoras: creando instancias](#funcion-constructora)  
38. [Introducción al concepto de clases](#que-es-una-clase)  
39. [Prototipos y el modelo de herencia en JavaScript](#prototipos-y-herencias)  
40. [Herencia aplicada: ejemplos prácticos](#herencia-en-la-practica)  
41. [Uso avanzado de prototipos](#prototipos-en-la-practica)  
42. [El comportamiento de *this* en diferentes contextos](#this-en-javascript)  
43. [Proyecto práctico: Construyendo una red social](#proyecto-crea-una-red-social)  
44. [Expandiendo la red social: Parte 2](#proyecto-crea-una-red-social-parte-2)  

## Asincronía en JavaScript

45. [¿Cómo opera el JavaScript Engine?](#como-funciona-el-javascript-engine)  
46. [Manejo de Promesas en JavaScript](#promesas-en-javascript)  
47. [Simplificación del código con async y await](#usando-async-y-await-en-javascript)  
48. [Iterando asincrónicamente con for await of](#for-await-of)  
49. [Entendiendo el funcionamiento de la web](#como-funciona-la-web)  
50. [Protocolos de comunicación: ¿Qué es HTTP?](#como-funciona-http)  
51. [Realizando peticiones con el método GET](#metodo-get-en-javascript)  
52. [Enviando datos al servidor con POST](#metodo-post-en-javascript)  
53. [Eliminando información con el método DELETE](#metodo-delete-en-javascript)  
54. [Importancia de los identificadores en DELETE](#importancia-del-id-en-el-metodo-delete)  
55. [Novedades en ECMAScript 6 y próximos pasos](#ecmascript-6-y-tus-siguientes-pasos)  

***

# Manipulación del DOM

#### Intro Manipulación del DOM
1. [¿Qué es DOM y Window Object?](#que-es-dom-y-window-object)  
2. [Explorando Nodos del DOM](#explorando-nodos-del-dom)  

### Seleccionando y Accesando a Elementos del DOM

3. [Consultando el DOM con getElementById y querySelector](#consultando-el-dom-con-getelementbyid-y-queryselector)  
4. [Navegación efectiva entre nodos](#navegacion-efectiva-entre-nodos)  

### Manipulando Elementos del DOM

5. [Modificando atributos y propiedades](#modificando-atributos-y-propiedades)  
6. [Modificando texto en HTML](#modificando-texto-en-html)  
7. [Modificando estilos en HTML](#modificando-estilos-en-html)  
8. [Modificando la visibilidad de elementos HTML](#modificando-la-visibilidad-de-elementos-html)  
9. [Creación de elementos con HTML Strings e insertAdjacentElement()](#creacion-de-elementos-con-html-strings-e-insertadjacentelement)  
10. [Agregando elementos con innerHTML e insertAdjacentHTML()](#agregando-elementos-con-innerhtml-e-insertadjacenthtml)  
11. [Creación de elementos con createElement()](#creacion-de-elementos-con-createelement)  
12. [Remover elementos con remove() y removeChild()](#remover-elementos-con-remove-y-removechild)  
13. [Clonación y reemplazo de elementos con cloneNode y replaceChild](#clonacion-y-reemplazo-de-elementos-con-clonenode-y-replacechild)  

### Manipulando Eventos en el DOM

14. [Entendiendo eventos y tipos: Burbuja, Captura y Propagación](#entendiendo-eventos-y-tipos-burbuja-captura-y-propagacion)  
15. [Agregar y eliminar escuchadores de eventos o Event Listeners](#agregar-y-eliminar-escuchadores-de-eventos)  
16. [El objeto evento o eventObject](#el-objeto-evento-o-eventobject)  
17. [Manejo de entradas de formulario y validación](#manejo-de-entradas-de-formulario-y-validacion)  
18. [Delegación de eventos y prevención de comportamiento predeterminado](#delegacion-de-eventos-y-prevencion-de-comportamiento-predeterminado)  

### Creando un Administrador de Tareas

19. [Añadir tareas desde un formulario](#anadir-tareas-desde-un-formulario)  
20. [Eliminar y editar tareas del DOM](#eliminar-y-editar-tareas-del-dom)  
21. [Almacenamiento y carga de datos en localStorage](#almacenamiento-y-carga-de-datos-en-localstorage)  
22. [Eliminar y editar tareas del almacenamiento local](#eliminar-y-editar-tareas-del-almacenamiento-local)  
23. [Inspeccionando y solucionando errores en el código](#inspeccionando-y-solucionando-errores-en-el-codigo)  
24. [Personalizando la interfaz del administrador de tareas](#personalizando-la-interfaz-del-administrador-de-tareas)  

***


# Javascript Inicial

## ¿Por qué aprender JavaScript?

JavaScript es el lenguaje esencial para el desarrollo web. Más allá de las páginas web, permite crear servidores, aplicaciones móviles, juegos y más. Su versatilidad y la alta demanda en el mercado laboral lo convierten en una habilidad clave para cualquier desarrollador.

***

## ¡Hola Mundo! en Mac

Aprenderás a configurar tu entorno de desarrollo en Mac usando Visual Studio Code y Node.js. Este será tu primer paso para escribir y ejecutar tu primer programa en JavaScript.

***

### Cheatsheet Fundamentos de Javascript

Accede a esta guía rápida con los conceptos esenciales del curso.  
[Cheatsheet Fundamentos de Javascript](https://github.com/emasatodev/javascript-cheatsheet/tree/main/01-javascript-inicial)

***

### Ejercicios de Fundamentos de Javascript

Refuerza tus conocimientos con estos ejercicios prácticos diseñados para cada sección del curso.  
[Ejercicios de Fundamentos de Javascript](https://github.com/emasatodev/javascript-ejercicios/tree/main/01-javascript-inicial)
