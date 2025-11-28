# 🛒 E-commerce de Camisetas de Fútbol — React + Vite

Proyecto desarrollado como trabajo final para el curso de **ReactJS – Talento Tech**.  
El sitio funciona como un e-commerce completo donde el usuario puede navegar productos, filtrarlos, ver sus detalles, agregarlos al carrito y realizar la compra.  
Además, incluye un **panel de administración (CRUD)** para gestionar los productos desde la misma aplicación.

---

## 🚀 Tecnologías utilizadas

- **React**  
- **Vite**  
- **React Router DOM**  
- **Context API**  
- **Fetch API**  
- **SweetAlert2**
- **React-Tostify**  
- **TailwindCSS** 
- **Mock API**
- **React Icons**
- **React Document Data** (SEO)

---

## 📦 Funcionalidades principales

### 🛍️ Catálogo
- Listado completo de productos  
- Filtrado por nombre  
- Página de detalle con información ampliada  
- Imágenes, descripciones y precios reales de camisetas

### 🧺 Carrito de compras
- Agregar productos
- Modificar cantidades  
- Eliminar productos individualmente  
- Cálculo automático de:
  - Subtotal  
  - Total  
  - Cantidades totales  

### 🔧 Panel de administrador (CRUD)
- Listado de productos
- Crear nuevos productos  
- Editar productos existentes  
- Eliminar con confirmación mediante SweetAlert  
- Filtrado por nombre

### 📱 Diseño responsivo
- Compatible con móviles, tablets y desktop  
- Estética simple y moderna.

---

## 🗂️ Estructura del proyecto

src/
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ ├── CartWidget.jsx
│ └── ...
├── pages/
│ ├── Home.jsx
│ ├── ProductoDetalle.jsx
│ ├── Nosotros.jsx
│ └── ...
├── context/
│ ├── CartContext.jsx
│ ├── ProductsContext.jsx
│ └── AuthContext.jsx
├── App.jsx
└── main.jsx

---

## ⚙️ Instalación y uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/ecommerce-react.git
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el proyecto
```bash
npm run dev
```
---

## 🎯 Objetivo del proyecto
El objetivo es aplicar los conocimientos adquiridos en el curso de React, logrando un proyecto completo, funcional y cercano a un entorno real de trabajo, integrando frontend con API externa y administración de productos.

---

## 🧑‍💻 Autor
Santiago Cugliari
Desarrollador Web — React / JavaScript / Node / Express

---

## 📄 Licencia
Este proyecto es de libre uso con fines educativos.