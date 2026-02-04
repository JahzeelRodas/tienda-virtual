# Tienda Virtual - Vader Games 🎮

Sistema de comercio electrónico automatizado desarrollado por **Jahzeel Issac Rodas Flores**. Este proyecto demuestra cómo transformar el ecosistema de Google en una plataforma de gestión de ventas funcional y escalable.

## 🚀 Arquitectura Técnica
A diferencia de los desarrollos tradicionales, este sistema utiliza una arquitectura **Serverless** basada en Google Cloud:

- **Lógica de Negocio:** Google Apps Script (GAS).
- **Base de Datos:** Google Sheets (Gestión de inventario y logs de ventas).
- **Interfaz de Usuario:** Google Forms (Check-out) y Web Apps.
- **Sincronización:** Desarrollado localmente utilizando **clasp**.

## 📁 Estructura del Código (src/)
- `productos.gs`: Gestión y validación de stock disponible.
- `pedidos.gs`: Procesamiento lógico de las órdenes entrantes.
- `pagos.gs`: Integración y validación de comprobantes de pago.
- `config.gs`: Variables globales y configuración del entorno.
- `utils.gs`: Funciones auxiliares para formato de fechas y notificaciones.

## 🎨 Interfaz de Usuario (Frontend)
La capa visual está construida sobre **Google Sites**, permitiendo una experiencia de usuario (UX) fluida y responsive:
- **Embeds Dinámicos:** Integración de Web Apps (Apps Script) para funciones de pagos.
- **Gestión de Contenido:** Sincronización directa con el inventario en Google Sheets.
- **Formularios de Pedido:** Google Forms incrustados y procesados por la lógica en `src/`.

## 🛠️ Instalación para Desarrolladores
Este proyecto está configurado para trabajar con **clasp**.
1. Clona el repositorio.
2. Asegúrate de tener instalado `@google/clasp`.
3. Crea tu propio archivo `.clasp.json` con el `scriptId` de tu proyecto de Google.
4. Ejecuta `clasp pull` para sincronizar.

---
**Perfil Profesional:** Ingeniero Informático | Desarrollador | Experto en Robótica Educativa.