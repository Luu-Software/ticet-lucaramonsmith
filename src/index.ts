import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.

function calcularTotal(id:string, cantidadNum:number, codigoDescuento:string):number {
  const precios: Record<string, number> = {
    sabrina: 1000, kgatlw: 700, lali: 500, magdalena: 600,
    viagra: 400, dillom: 350, marilina: 200, mugre: 150,
  };
  const descuentos: Record<string, number> = {
    TIC10: 0.10, TIC20: 0.20, DARIO: 0.50,
  };

  const precioBase = precios[id];
  const descuento = codigoDescuento ? (descuentos[codigoDescuento]) : 0;

  return precioBase * cantidadNum * (1 - descuento);
}


cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar() ;
