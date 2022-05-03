class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const remera = new Producto(1, "remera", 1500);
const buzo = new Producto(2, "buzo", 3200);
const jean = new Producto(3, "jean", 5500);
const zapatillas = new Producto(4, "zapatillas", 9900);

const productos = [remera, buzo, jean, zapatillas];
const carrito = [];
let productoElegido;

//function saludo
const saludar = () => {
  alert("Bienvenido a BRAGA");
  let nombre = prompt("Ingrese su nombre: ");
  while (!isNaN(nombre)) {
    nombre = prompt("Ingrese su nombre");
  }
  alert("Bienvenido " + nombre);
};

const consultarProductos = () => {
  let texto = "";
  for (const p of productos) {
    texto += `${p.id}) ${p.nombre}\n`;
  }
  let prod = parseInt(prompt(`Que producto llevara? :\n${texto} `));

  while (prod > 4 || prod < 1 || isNaN(prod)) {
    prod = parseInt(prompt(`Que producto llevara? :\n${texto} `));
  }

  return prod;
};

const llevarProducto = () => {
  let buscarProducto = productos.find(
    (element) => element.id === productoElegido
  );

  //some
  let existe = carrito.some((element) => element.id === productoElegido);

  if (existe) {
    buscarProducto.cantidad++;
  } else {
    buscarProducto.cantidad = 1;
    carrito.push(buscarProducto);
  }

  const seguir = confirm("Desea agregar otro producto ?");

  if (seguir) {
    productoElegido = consultarProductos();
    llevarProducto();
  }
};

saludar();
productoElegido = consultarProductos();
llevarProducto();
