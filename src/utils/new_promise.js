import data from "../../data/data_products";

/* Funcion de promesa para simular busqueda de datos locales */
export const buscar_datos = new Promise ((resolve, reject) => {

    setTimeout(() => {
        resolve(data)
    }, 3000);
    
})