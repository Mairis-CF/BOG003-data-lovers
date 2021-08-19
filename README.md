---
title: 'Documentación GhibliNautas'

---

GhibliNautas
===


## Índice de contenidos
* [Resúmen del proyecto](#Resúmen)
* [investigación UX](#InvestigaciónUX)
* [Historias de usuario](#Historias)
* [Test de usabilidad](#Test)


Contexto
--
Estudio Ghibli es uno de los más importantes estudios de animación en el mundo, teniendo un rotundo exito con producciones como *El viaje de Chihiro*, *Mi vecino Totoro*, *El maravilloso castillo ambulante de Howl,* entre otros titulos reconocidos. Fundado el 15 de Junio de 1985 en la ciudad de Tokio, Japón por **Hayao Miyazaki, Isao Takahata, Toshio Suzuki, Yasuyoshi Tokuma** quienes tambien se desempeñan como los principales productores y directores del estudio; el punto culmine de sus peliculas es su asombroso atención al detalle y la insistencia de sus directores en dibujar cada panel a mano, imponiendo como regla que solo el 10% de sus peliculas serían manipuladas por computación, de esta forma buscan hacer vivir en la actualidad las técnicas de animación tradicionales.



Resúmen del proyecto
--

En GhibliNautas traemos en una interfaz sencilla y limpia los principales datos sobre cada producción:  las fechas de lanzamiento de cada película, La experiencia en cifras durante cada entrenos en las taquillas japonesas, poster original, etc.

#### Objetivo cohorte
El objetivo principal de este proyecto es que, entendiendo las necesidades de los usuarios, se diseñe y construya una interfaz web donde se pueda visualizar, ordenar, filtrar y realizar cálculos estadisticos con la información.

*Puedes visitarnos en gh pages [aquí](https://mairis-cf.github.io/BOG003-data-lovers/src/index.html)*


Investigación UX
---
 Entrevistamos la idea y avances especificos del proyecto con colegas y personas identificadas como publico objetivo y potencial, en el lapso de tiempo destinado a recopilar experiencias, ideas e intereses de usuarios, nuestro ultimo prototipo de baja fidelidad se vio así:
 
 
![Sketch primeros elementos](https://i.imgur.com/NJIUR3g.jpg)

*Nuestros sketches construidos con ayuda de la comunidad*

![sketch en papel segundos elementos](https://i.imgur.com/KGlnMnT.jpg)


Para dar paso a nuestros prototipos de alta fidelidad diseñados en Figma:

![](https://i.imgur.com/bc3akto.jpg)

![](https://i.imgur.com/5IslvfU.jpg)


*Puedes visitarnos en Figma [aquí](https://www.figma.com/file/fsvH4CsbL0x1WpXIBczhxf/Pantalla-Data?node-id=1%3A2)*


Historias de Usuario
---

**Historia de usuario n° 1**

*Yo: como usuario del sitio web Giblinautas
*quiero:  visualizar una pantalla   de tarjetas con imágenes sobre   películas del Studio Ghibli 
*Para:   conocer el título de la pelicula y la imagen más representativa de cada producción, junto con su año de lanzamiento, director y score en taquilla

**Criterios de aceptación:**

* En la interfaz se   puede visualizar una imagen de cada una de las películas de Studio Ghibli en columnas y filas.
* La página puede ser observada en pantallas de distintas resoluciones.
* 
**Historia de usuario nº2**

Yo: como usuario
Requiero: contar con un menú lateral de navegación
Para: acceder a información sobre el estudio Ghibli como filtros por películas antiguas y recientes, ordenamiento alfabético y estadísticas de score en taquillas y botón que lleva a la página de inicio

**Criterios de aceptación:**

* El menú lateral puede ser desplegado en pantallas de distintas resoluciones (responsive).
* Abarca menos del 20% del espacio de la página
* Contiene enlaces a varias categorías de interés especificadas anteriormente
* Contiene un botón que lleva directo a la página de inicio
* su diseño es sencillo y simple.

**Historia de usuario n° 3**

Yo: como usuario del sitio web GhibliNautas
Requiero: Filtrar las películas de acuerdo a su año de lanzamiento mayores o menores al año 2000
Para: Conocer cuáles son las películas más recientes o antiguas del estudio.

**Criterios de aceptación**

* El usuario encuentra un botón tipo selecta con dos opciones de filtrado. Primera opción "más antiguas" que mostrará películas lanzadas antes del año 2000; y segunda opción "más recientes" que mostrará las películas lanzadas después del año 2000.
* Los botones son funcionales y pueden observarse en pantallas de cualquier resolución

**Definición de terminado**

* Construcción de función FilterData de acuerdo al año de lanzamiento
* Los botones son observables en pantallas de distintas resoluciones
* Las funciones aprueban los testeos unitarios.

**Historia de usuario n°4**

Yo: como usuario del sitio web GhibliNautas
Requiero: ordenar las películas por orden alfabético con referencia a su titulo
Para: encontrar con más facilidad cada producción

**Criterios de aceptación:**

* El usuario encontrará un botón tipo select con dos opciones de ordenamiento: primera opción "A-Z" que permitirá visualizar las películas ascendentemente; y la segunda opción "Z-A" que permitirá visualizar las películas descendentemente.
* 
**Historia de usuario n°5**

Yo: usuario del sitio web GhibliNautas
quiero: Conocer las estadísticas de raiting de las películas de Studio Ghibli
Para: Visualizar cuales obtuvieron una puntuación superior en taquilla. 

**Criterios de aceptación:** 

* El usuario encontrará en la página principal un botón con la opción de "estadísticas"
* El botón "estadísticas" conduce a una nueva sección donde se visualiza un botón "ver “mas” que despliega el resultado calculado por raiting de las producciones del estudio
* El cálculo muestra dos opciones: un raiting superior a 90 puntos sobre 100 
*  y un raiting que está por debajo de ese valor.
* La sección "estadísticas" contiene un botón "cool" que   cierra la visualización del cálculo.

**Definición de terminado**

* Construcción de función estimateScore que devuelve un porcentaje de acuerdo al raiting score de cada película
* Uso de innerHTML para visualizar la nueva sección con información estadística. (manipulación DOM)
* manejo de eventos para visualizar la información
* La función estimateScore aprueba los test unitarios
* La sección "estadísticas" cumple con los principios del diseño responsive.


Test de usabilidad
--
La aplicación web fue puesta a prueba por diferentes usuarios que expresaron sus sugerencias y aportes al realizar cada historia de usuario con base en la recopilación de una encuesta 

![](https://i.imgur.com/nSPLNQk.jpg)
![](https://i.imgur.com/PVDqtEf.jpg)
![](https://i.imgur.com/ceNwSw8.jpg)


## Comentarios

:::info
**¿Tienes dudas sobre este documento** ¡Ponte en contacto!



* este proyecto fue realizado en dupla entre Mairis Castro y Maria Elena Arroyo




###### tags: `JavaScript` `Documentation` `ECMAScript6` `JSON` `Student`
