--Casos de Prueba

Feature: Validación de Inicio de Sesión y creación de empleado

Background:
GIVEN 

Scenario: validar ingreso de sesión con usuario y contraseña correctos

GIVEN Usuario se encuentra en la pagina lo login de la pagina orange
WHEN usuario ingresa con las credenciales correctas
THEN ingresa al portal de manera satisfactoria

Scenario: validar ingreso de sesión con usuario incorrecto y contraseña correctos

GIVEN Usuario se encuentra en la pagina lo login de la pagina orange
WHEN usuario ingresa con usuario incorrecto
THEN el portal valida que los datos son incorrectos

Scenario: validar ingreso de sesión con usuario correcto y contraseña incorrecta

GIVEN Usuario se encuentra en la pagina lo login de la pagina orange
WHEN usuario ingresa con contrasela incorrecto
THEN el portal valida que los datos son incorrectos

Scenario: validar la creación de empleado nuevo

GIVEN Usuario se encuentra logueado correctamente
AND selecciona la opcion de empleados
WHEN Usuario hace clic en registrar Empleado
AND se completan los datos del empleado
AND se hace clic en el boton de Registro
THEN se Registra el empleado de manera satisfactoria

-- Técnica usada
Partición de Equivalencia: cuando se valida usuario correcto y usuario incorrecto

-- Patron de Diseño

se ha utilizado el patron de diseño Page Object Model (POM)

-- Software necesaio
instalación de visual studio code
instalacion de node js
mediante node js instalar playwright (npm install playwright)