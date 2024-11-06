let carrito = [];
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

// Función para actualizar el carrito de compras
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElement = document.getElementById("total");
    
    listaCarrito.innerHTML = "";
    
    carrito.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(p);
    });
    
    totalElement.textContent = total.toFixed(2);
}

// Función para mostrar la sección correspondiente
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("seccion-oculta");
        sec.classList.remove("seccion-activa");
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(seccion).classList.remove("seccion-oculta");
    document.getElementById(seccion).classList.add("seccion-activa");
}

// Función para confirmar la compra
function confirmarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos para continuar.");
    } else {
        alert(`Compra confirmada. Total a pagar: $${total.toFixed(2)}`);
        // Limpiar el carrito después de la compra
        limpiarCarrito();
    }
}

// Función para limpiar el carrito
function limpiarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
    document.getElementById("lista-carrito").innerHTML = "<p>No hay productos en el carrito.</p>";
}
