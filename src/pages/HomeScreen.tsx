import { Container } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <Container>

                <h5>Descripción:</h5>
                <hr />
                <p>
                    Este proyecto template es creado con la funcion de actuar como boilerplate de un proyecto de React con Typescript.
                    Tiene las librerias básicas instaladas de React-Boostrap para la utilización de componentes y armar interfaces. Axios para facilitar las conexiones
                    HTTP, Sass para la creacion de un tema personalizado y manejo de los estilos y react-router-dom para la generacion del ruteo de la aplicación.
                </p>

                <h5>Iniciar proyecto:</h5>
                <hr />

                <ul>
                    <li>Tener instalado node js con una versión superior a 12</li>
                    <li>Clonar el repositorio desde esta url <a className='b' href="https://sass-lang.com/" target="_blank">repositorio</a></li>
                    <li>Ir a la ruta donde se descargo el proyecto</li>
                    <li>Correr comando npm install o npm i</li>
                    <li>Correr comando npm run dev</li>
                </ul>

                <h5>Estructura del proyecto:</h5>
                <hr />

                <p>Dentro de la carpeta src:</p>

                <ul>
                    <li><strong>Carpeta api:</strong> Puede Contener archivos json para mokear respuestas de apis</li>
                    <li><strong>Carpeta assets:</strong> Puede Contener archivos de imagenes en formato png, jpg, svg, audio, etc</li>
                    <li><strong>Carpeta components:</strong> Puede Contener archivos .tsx que son todos los componentes reutilizables de la aplicación, exportar los componentes en el archivo index.ts para administrar las exportaciones en un solo lugar.</li>
                    <li><strong>Carpeta interfaces:</strong> Puede Contener archivos .ts que son todas las interfaces de las entidades de la aplicacón</li>
                    <li><strong>Carpeta Pages:</strong> Contiene todas las paginas de la aplicación además tiene un archivo index en donde se exportan todas las páginas en un solo lugar.</li>
                    <li><strong>Carpeta Routes:</strong> Contiene el archivo Routes.tsx donde se administran las rutas de la aplicación, puede haber más archivos de rutas para rutas hijas etc. <br /> Ver más sobre react-router-dom <a className='b' href="https://reactrouter.com/en/main" target="_blank">aquí</a></li>
                    <li><strong>Carpeta styles:</strong> Contiene la modularizacón de los archivos SASS para administrar los estilos personalizados</li>
                    <li><strong>Archivo App.tsx:</strong> Es el componente donde se renderizan todos los componentes de la aplicación</li>
                    <li><strong>Archivo Main.tsx:</strong> Es el punto de entrada de la aplicación. Se renderiza el componente App.tsx </li>
                </ul>

                <h5>Manejo de estilos personalizados:</h5>
                <hr />

                <p>Dentro de la carpeta styles:</p>

                <ul>
                    <li><strong>Carpeta modules:</strong> Contiene los módulos Sass con los estilos de todos los componentes. Se nombran con _mi-componente para hacer referencia que es un módulo. </li>
                    <li><strong>Archivo _variables:</strong> Es un módulo que contiene valores de colores, medidas o estilos que se utilizan en muchos lugares de la aplicación</li>
                    <li><strong>Archivo index.scss:</strong> Es el archivo en donde se importan todos los módulos scss. Este archivo se importa en el Main.tsx. También se pueden agregar estilos generales a toda la app como por ej el tamaño y color de los titulares h1, h2 etc</li>
                </ul>

                <h5>Cómo crear un estilo personalizado:</h5>
                <hr />

                <ul>
                    <li>Dentro de la carpeta components crear un componente mi-componente y crear la funcionalidad esperada.</li>
                    <li>En styles/modules crear un módulo _mi-componente y definir los estilos para ese componente </li>
                    <li>Importar el módulo creado en el archivo index.scss. Ver más sobre Sass <a className='b' href="https://sass-lang.com/" target="_blank">aquí</a></li>
                </ul>

            </Container>

        </>
    )
}

export default HomeScreen