# 📸 Aplicación de Galería con Ionic + Angular

Este proyecto es una aplicación móvil desarrollada con **Ionic** y **Angular**, que permite capturar, visualizar y gestionar fotos desde el dispositivo móvil. Se aprovechan funcionalidades de la cámara y almacenamiento mediante Capacitor, integrando permisos para Android y control de calidad de las imágenes.

---

## 🧠 Explicaciones de Implementación

### 🖼️ Literal 1 — Mostrar nombre de la foto

Se envolvió la etiqueta de la imagen en un `div`, y justo debajo se colocó un encabezado `h4` que accede a la propiedad `filepath` del objeto `photo`, lo que permite mostrar el **nombre de la foto**.

```html
<div>
  <img [src]="photo.webviewPath" />
  <h4>{{ photo.filepath }}</h4>
</div>
```

---

### 🔁 Literal 2 — Cambio de Tab

Se modificó el código HTML de `tab2.page.html` para trasladarlo a `tab3.page.html`, reorganizando la lógica de presentación y navegación entre las pestañas de la aplicación.

---

### 🧩 Literal 3 — Uso de Directiva Estructural (`*ngIf`)

Se utilizó una **Structural Directive** (`*ngIf`) de Angular para mostrar las fotos solo cuando una variable booleana de estado lo permita. Esta variable cambia al valor opuesto cuando se hace clic en un botón, lo que permite **alternar la visibilidad** de las fotos.

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="mostrarFotos = !mostrarFotos">
      <ion-icon name="images"></ion-icon>
  </ion-fab-button>
</ion-fab>

<ion-grid *ngIf="mostrarFotos">
  <!-- Contenido de fotos -->
</ion-grid>
```

---

### 📷 Literal 4 — Reducción de Calidad de Imagen

En `photo.service.ts` se agregó un método similar a `addNewToGallery`, pero ajustando la propiedad `quality` del objeto `capturedPhoto` de `100` a `50`, para reducir el tamaño de las imágenes capturadas.

```ts
const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 50
});
```

---

## ⚙️ Permisos requeridos para generación de APK (Android)

Asegúrate de declarar los siguientes permisos en el archivo `AndroidManifest.xml` para garantizar el acceso correcto a imágenes, videos, audio y almacenamiento:

```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```
