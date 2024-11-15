# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Proyecto template React + Typescript creado con Vite

## Descripción:

Vite es una herramienta de construcción de proyectos web extremadamente rápida y eficiente que se centra en la velocidad del desarrollo. Utiliza la importación de módulos nativos de JavaScript para eliminar la necesidad de una fase de construcción costosa, lo que permite tiempos de desarrollo más rápidos al tiempo que proporciona una experiencia de desarrollo fluida y optimizada para proyectos web modernos.

## Descripción del Proyecto:

Este proyecto template es creado con la función de actuar como boilerplate de un proyecto de React con Typescript. Tiene las librerías básicas instaladas de React-Boostrap para la utilización de componentes y armar interfaces. Axios para facilitar las conexiones HTTP, Sass para la creación de un tema personalizado y manejo de los estilos y react-router-dom para la generación del ruteo de la aplicación.

## Iniciar proyecto:

- Tener instalado node js con una versión superior a 12
- Clonar el repositorio desde este [repositorio](http://192.168.123.38/walldecor/walldecor-web.git)
- Ir a la ruta donde se descargó el proyecto
- Correr comando npm install o npm i
- Correr comando npm run dev

## Estructura del proyecto:

Dentro de la carpeta src:

- **Carpeta api:** Puede contener archivos json para mockear respuestas de APIs
- **Carpeta assets:** Puede contener archivos de imágenes en formato png, jpg, svg, audio, etc
- **Carpeta components:** Puede contener archivos .tsx que son todos los componentes reutilizables de la aplicación. Exportar los componentes en el archivo index.ts para administrar las exportaciones en un solo lugar. Ver más sobre react-router-dom [aquí](https://reactrouter.com/en/main)
- **Carpeta interfaces:** Puede contener archivos .ts que son todas las interfaces de las entidades de la aplicación
- **Carpeta Pages:** Contiene todas las páginas de la aplicación además tiene un archivo index en donde se exportan todas las páginas en un solo lugar.
- **Carpeta Routes:** Contiene el archivo Routes.tsx donde se administran las rutas de la aplicación, puede haber más archivos de rutas para rutas hijas etc.
- **Carpeta styles:** Contiene la modularización de los archivos SASS para administrar los estilos personalizados
- **Archivo App.tsx:** Es el componente donde se renderizan todos los componentes de la aplicación
- **Archivo Main.tsx:** Es el punto de entrada de la aplicación. Se renderiza el componente App.tsx

## Manejo de estilos personalizados:

Dentro de la carpeta styles:

- **Carpeta modules:** Contiene los módulos Sass con los estilos de todos los componentes. Se nombran con _mi-componente para hacer referencia que es un módulo.
- **Archivo _variables:** Es un módulo que contiene valores de colores, medidas o estilos que se utilizan en muchos lugares de la aplicación
- **Archivo index.scss:** Es el archivo en donde se importan todos los módulos scss. Este archivo se importa en el Main.tsx. También se pueden agregar estilos generales a toda la app como por ejemplo el tamaño y color de los titulares h1, h2, etc

## Cómo crear un estilo personalizado:

- Dentro de la carpeta components crear un componente mi-componente y crear la funcionalidad esperada.
- En styles/modules crear un módulo _mi-componente y definir los estilos para ese componente
- Importar el módulo creado en el archivo index.scss. Ver más sobre Sass [aquí](https://sass-lang.com/)