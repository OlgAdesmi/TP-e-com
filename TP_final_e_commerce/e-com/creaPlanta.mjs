class Plantas {
    constructor(id, tipo, nombreVulgar, nombreCientifico, tamaño, colorFloracion,
        epocaFloracion, Follaje, presentacion, stock, precio, imagenes) {
        this.id = id
        this.tipo = tipo
        this.nombreVulgar = nombreVulgar
        this.nombreCientifico = nombreCientifico
        this.tamaño = tamaño
        this.colorFloracion = colorFloracion
        this.epocaFloracion = epocaFloracion
        this.Follaje = Follaje
        this.presentacion = presentacion
        this.stock = stock
        this.precio = precio
        this.imagenes = imagenes
    }
}

let arrayPlantas = [
    new Plantas(0,"enredadera","Sen del Campo", "Senna corymbosa", 1, "amarillo", "primavera", "caducifolio",
    "maceta", 10, 800, [""]),
    new Plantas(1,"enredadera","Mariposera", "Austroeupatorium inulifolium", 0.7, "blanco", "primavera", "caducifocio",
    "maceta", 10, 700, [""]),
    new Plantas(2,"arbusto","Cedron del campo", "Aloysia gratissima", 0.9, "blanco", "primavera", "persistente",
    "maceta", 10, 1000, [""]),
    new Plantas(3,"arbusto","Flor de San Juan", "Pyrostegia venusta", 0.5, "naranja", "primavera", "persistente",
    "maceta", 10, 1700, [""]),
    new Plantas(4,"arbol","Jacaranda", "Jacaranda mimosifolia", 1.5, "violeta", "primavera", "caducifolio",
    "a raiz desnuda", 10, 1200, [""]),
    new Plantas(5,"arbol","Azota caballo", "Luehea divaricata", 1.2, "rosado", "primavera", "caducifolio",
    "maceta", 10, 2700, [""]),
    new Plantas(6,"arbol","Ibirapita", "Peltophorum dubium", 0.7, "amarillo", "verano", "persistente",
    "maceta", 10, 1600, [""]),
    new Plantas(7,"arbol","Casuarina", "Casuarina cunninghamiana", 1.2, "no", "no", "persistente",
    "maceta", 10, 700, [""]),
    new Plantas(8,"conifera","Cipres Calvo", "Taxodium distichum", 1, "no", "no", "persistente",
    "maceta", 10, 2000, [""]),
    new Plantas(9,"herbacea","Camará morado", "Lantana megapotamica", 0.4, "violeta", "primavera", "persistente",
    "maceta", 10, 970, [""]),
    new Plantas(10,"herbacea","Azucenita colorada", "Rhodophiala bifida", 0.3, "rojo", "primavera", "perenne",
    "maceta", 10, 1300, [""]),
]


console.table(arrayPlantas)