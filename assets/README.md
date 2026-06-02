# Assets

Estructura recomendada para mantener archivos publicos del sitio:

- `css/`: estilos compilados o propios del sitio.
- `js/`: scripts propios del sitio.
- `vendor/`: librerias de terceros. No mezclar contenido propio aca.
- `documents/cv/`: CVs y documentos profesionales descargables.
- `documents/certificates/`: PDFs de certificados y diplomas.
- `images/brand/`: logo, cover, identidad visual y piezas globales de marca.
- `images/profile/`: fotos, avatares e imagenes personales.
- `images/blog/`: imagenes destacadas de posts.
- `images/blog/tutorials/`: capturas e imagenes internas de tutoriales.
- `images/portfolio/`: imagenes de proyectos y casos de portfolio.
- `images/certificates/`: imagenes de certificados y diplomas.
- `images/logos/tech/`: logos de tecnologias y herramientas.
- `images/logos/brands/`: logos de marcas o clientes.
- `images/logos/clients/`: logos de clientes usados por plantillas o secciones antiguas.

Buenas practicas:

- Usar nombres en minusculas y separados por guiones para archivos nuevos.
- Evitar espacios y acentos en nombres nuevos cuando sea posible.
- Guardar PDFs en `documents/`, no en `images/`.
- Mantener assets de terceros dentro de `vendor/`.
- Usar `relative_url` en Liquid para que GitHub Pages respete `baseurl`.
