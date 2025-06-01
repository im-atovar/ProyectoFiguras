import FiguraService from "../models/figuraService.js";

class FiguraController {
    figuraServices = null;

    constructor() {
        this.figuraServices = new FiguraService();
        this.formularioCalcularArea = this.formularioCalcularArea.bind(this);
        this.calcularFiguras = this.calcularFiguras.bind(this);
    }

    formularioCalcularArea(request, response) {
        response.render("area");
    }

    calcularFiguras(request, response) {
        const { figura, operacion, base, altura, radio } = request.body;
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