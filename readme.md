# Features
**Gulp, Sass, Uglify, Browser-sync, Cssnano, Sourcemaps css, Plumber, Imagemin**
Preinstall Bootstrap 3

## Gulp-Dev

Pasos a seguir para utilizar el automatizador de tareas **Gulp**

### Requisitos:
  - Tener instalado **nodejs** y **npm**
  - Instalar **gulp**, **bower** y **browser-sync** de forma **global** 
```sh
$ npm install -g gulp bower browser-sync
```
  - Una vez instalados los paquetes globales iniciamos la instalación de los paquetes locales de desarrollo 
```sh
$ npm install
$ bower install
```
  - Lo siguiente es abrir el archivo **gulpfile.js** y hacer la siguientes ajustes:
    - Cambiar la variable **proxyUrl** por la url de tu entorno de desarrollo local del proyecto
    - También puedes configurar el puerto(**localPort**) en el que desees que se ejecute browserSync
  - Una vez hecho lo anterior abrir una terminal en esta carpeta y ejecutar:
```sh
$ gulp serve
```
```sh
$ gulp
```
```sh
$ gulp dist
```
**NOTA:**
  - Con **gulp serve** solo se activa el modo de desarrollo en vivo(**.php|.html**).
  - Con **gulp** se activa también el desarrollo en vivo con escucha de **todos** los archivos de desarrollo de la carpeta **src/(js,sass,img)**  + **.php**
  - y con **gulp dist** generas los archivos para producción y ya puedes enviar los cambios al git

**Recomendación**

En caso de errores prueba instalar de nuevo los paquetes de node y bower
```sh
$ npm install
$ bower install
```

## Customize gulpfile.js

Primero configurar si va usar usar un proxy (para desarrollo en php u otro) en **true** y configura tu proxy(local.app.com)
o desarrollo estático html proxy = **false** y agrega a las **variables scripts y plugins**  los scripts que necesitas que
compile y vuelve a ejecutar gulp.
