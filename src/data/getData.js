import { baseDatos  } from '../data/data.js';

const traerPorId = (id, array) => array.find((el) => el.id === id);

// promesas
const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(baseDatos);
  }, 2000);
});

const traerProductosBaseDatos = async (setState) => {
  try {
    const resultado = await traerProductos;
    setState(resultado);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

const traerProductosPorId = async (id, setState) => {
    try {
      const resultado = await traerProductos;
      setState(traerPorId(id, resultado));
    } catch (error) {
      console.log(error);
    }
  };

export { traerProductosBaseDatos, traerProductosPorId };