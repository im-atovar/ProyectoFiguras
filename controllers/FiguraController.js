import FiguraService from "../models/FiguraService.js";

/**
 * Controlador para manejar las operaciones de figuras geométricas.
 * Permite calcular el área y el perímetro de rectángulos, triángulos y círculos.
 * @class FiguraController
 * @property {FiguraService} figuraServices - Servicio para realizar cálculos de figuras geométricas.
 */
class FiguraController {
    figuraServices = null;

    constructor() {
        this.figuraServices = new FiguraService();
        this.formularioCalcularArea = this.formularioCalcularArea.bind(this);
        this.calcularFiguras = this.calcularFiguras.bind(this);
    }

    /**
     * Renderiza el formulario para calcular el área de figuras geométricas.  
     * @param {Object} request - Objeto de solicitud de Express.
     * @param {Object} response - Objeto de respuesta de Express.
     * @returns {void} 
     * @memberof FiguraController
     */
    formularioCalcularArea(request, response) {
        response.render("area");
    }

    /**
     * Calcula el área o perímetro de una figura geométrica
     * según los datos ingresados en el formulario.
     * @param {Object} request - Objeto de solicitud de Express.
     * @param {Object} response - Objeto de respuesta de Express.
     * @returns {void}
     * @memberof FiguraController
     * @throws {Error} Si la figura o la operación no son válidas, o si los datos ingresados son incorrectos.
     */ 
    calcularFiguras(request, response) {
        const { figura, operacion, base, altura, radio, lado, baseMayor, baseMenor, diagonalMayor, diagonalMenor } = request.body;
        let resultado;

        try {
            if (figura === "rectangulo") {
                if (operacion === "area") {
                    resultado = this.figuraServices.calcularAreaRectangulo(base, altura);
                } else if (operacion === "perimetro") {
                    resultado = this.figuraServices.calcularPerimetroRectangulo(base, altura);
                }
            } else if (figura === "triangulo") {
                if (operacion === "area") {
                    resultado = this.figuraServices.calcularAreaTriangulo(base, altura);
                } else if (operacion === "perimetro") {
                    resultado = this.figuraServices.calcularPerimetroTriangulo(base, altura);
                }
            } else if (figura === "circulo") {
                if (operacion === "area") {
                    resultado = this.figuraServices.calcularAreaCirculo(radio);
                } else if (operacion === "perimetro") {
                    resultado = this.figuraServices.calcularPerimetroCirculo(radio);
                }
            } else if (figura === "cuadrado") {
                if (operacion === "area") {
                    resultado = this.figuraServices.calcularAreaCuadrado(lado);
                } else if (operacion === "perimetro") {
                    resultado = this.figuraServices.calcularPerimetroCuadrado(lado);
                }
            } else if (figura === "trapecio") {
                if (operacion === "area") {
                    resultado = this.figuraServices.calcularAreaTrapecio(baseMayor, baseMenor, altura);
                } else if (operacion === "perimetro") {
                    resultado = this.figuraServices.calcularPerimetroTrapecio(baseMayor, baseMenor, altura);
                }
            } else if (figura === "rombo") {
                if (operacion === "area") {
                    resultado = this.figuraServices.calcularAreaRombo(diagonalMayor, diagonalMenor);
                } else if (operacion === "perimetro") {
                    resultado = this.figuraServices.calcularPerimetroRombo(diagonalMayor, diagonalMenor);
                }
            } else {
                throw new Error("Figura no válida");
            }

            response.json({ resultado });
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}

export default FiguraController;