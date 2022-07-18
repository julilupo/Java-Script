const ANIOACTUAL = 2022;
let anioVehiculo = parseInt (prompt ("Introduzca el año de su vehículo"));
let antiguedad = ANIOACTUAL-anioVehiculo;

if (antiguedad < 10) {
    console.log ("Abona 200 dólares de patente anual");
} else {
    console.log("Abona 100 dólares de patente anual");
}