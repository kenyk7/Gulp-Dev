# Features
**Gulp: Sass, Uglify, Browser-sync, Cssnano, Sourcemaps css, Plumber, Imagemin**
Pre-install Bootstrap 3: 13 material themes pre-configurados + organización de carpetas de sass
y listo para empezar a codear.

![Gulp-Dev](https://raw.githubusercontent.com/kenyk7/Gulp-Dev/master/src/Gulpdev.png "Gulp-Dev")
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
  - la carpeta assets es  la carpeta de dist por default.

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

## Sass utils core
Use sass mixin responsive helpers file in `sass/mixin/_media_queries.scss`

Example use `@include maxw(xs){};` for  `@media (max-width: 767px){};`

Or use `@include minw(xs){};` for  `@media (min-width: 768px){};`
#### Input sass example
```sh
.my-component{
    // use example props test
    width: 25%;
    font-size: 15px;
    & &-title{
        color: blue;
    }
    // use max-width
    @include maxw(sm){
        width: 50%;
    }
    @include maxw(xs){
        width: 75%;
    }
    @include maxw(xxs){
        width: 100%;
    }
    // use min-width
    @include minw(xs){
        font-size: 18px;
    }
}
```
#### Output css
```sh
.my-component{
    width: 25%;
    font-size: 15px;
}
.my-component .my-component-title{
    color: blue;
}
@media (max-width: 991px) {
    .my-component{
        width: 50%;
    }
}
@media (max-width: 767px) {
    .my-component{
        width: 75%;
    }
}
@media (max-width: 479px) {
    .my-component{
        width: 100%;
    }
}
@media (min-width: 768px) {
    .my-component{
        font-size: 18px;
    }
}
```

#### Existing mixin media queries:
Mixin `maxw($breakpoint)` with parameters **md** = 1199px , **sm** = 991px , **xs** = 767px , **xxs** = 479px.

Example `@include maxw(md){...};`  output  `@media (max-width: 1199px){...};`

Mixin `minw($breakpoint)` with parameters **md** = 1200px , **sm** = 992px , **xs** = 768px , **xxs** = 480px.

Example `@include minw(xs){...};`  output  `@media (max-width: 768px){...};`

License
----
MIT
