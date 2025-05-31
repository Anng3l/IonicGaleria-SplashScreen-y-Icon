# 📸 Aplicación de Galería con Ionic + Angular

Este proyecto es una aplicación móvil desarrollada con **Ionic** y **Angular**, que permite capturar, visualizar y gestionar fotos desde el dispositivo móvil. Se aprovechan funcionalidades de la cámara y almacenamiento mediante Capacitor, el cual provee la funcionalidad para que el Splash Screen funcione, así como establecer un ícono para la aplicación, integrando permisos para Android y control de calidad de las imágenes.

---

## 🧠 Explicaciones de Implementación

### Splash Screen e Ícono en la aplicación

Para el establecimiento del splash screen y del ícono, se siguieron las guías provistas por Capacitor en su documentación oficial.

Los pasos seguidos han sido los siguientes:

  1. Instalar la librería requerida con el comando
  
  ```bash 
    npm install @capacitor/splash-screen 
  ```

  2. Establecer las configuraciones pertinentes en capacitor.config.ts
  ```ts
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: false,
      splashImmersive: false,
      layoutName: "launch_screen",
      useDialog: true,
    },
  }
  ```


  3. Establecer las configuraciones pertinentes en app.componente.ts
  ```ts
  export class AppComponent {
    constructor() {
      this.showSplash();
    }

    async showSplash() {
      await SplashScreen.show({
        autoHide: true,
        showDuration: 3000,
      });
    }
  }
  ```

  4. Instalar la librería requerida
  ```bash 
  npm install @capacitor/assets
  ```

  5. Crear una carpeta llamada assets en la raíz del proyecto. Las imágenes del splash screen e icon deben seguir una estructura de nombres fija:
  ```
    assets/
  ├── icon-only.png
  ├── icon-foreground.png
  ├── icon-background.png
  ├── splash.png
  └── splash-dark.png
  ```

  6. Una vez generados los archivos www y android, ejecutar el comando:
  ```bash 
    npx capacitor-assets generate
  ```


## ⚙️ Permisos requeridos para generación de APK (Android)

Asegúrate de declarar los siguientes permisos en el archivo `AndroidManifest.xml` para garantizar el acceso correcto a imágenes, videos, audio y almacenamiento:

```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```
