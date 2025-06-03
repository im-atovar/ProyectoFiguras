/**
 * @file FiguraService.js
 * @description Servicio para realizar cálculos de áreas y perímetros de figuras geométricas.
 * Soporta rectángulos, triángulos y círculos.
 * @author Andres Felipe Tovar Iquinas
 * @version 1.0.0
 */
class FiguraService {    
    /**
     * Calcula el área de un rectángulo.
     * @param {number} base - La base del rectángulo.
     * @param {number} altura - La altura del rectángulo.
     * @returns {number} Resultado del área del rectángulo.
     * @throws {Error} Si la base o la altura son menores o iguales a cero.
     * @memberof FiguraService
     * @example
     * const figuraService = new FiguraService();
     * const area = figuraService.calcularAreaRectangulo(5, 10);
     * console.log(area); // 50.00
     */
    calcularAreaRectangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        return parseFloat((base * altura).toFixed(2));
    }

    /**
     * Calcula el perímetro de un rectángulo.
     * @param {number} base - La base del rectángulo.
     * @param {number} altura - La altura del rectángulo.
     * @returns {number} Resultado del perímetro del rectángulo.
     * @throws {Error} Si la base o la altura son menores o iguales a cero.
     * @memberof FiguraService
     * @example
     * const figuraService = new FiguraService();
     * const perimetro = figuraService.calcularPerimetroRectangulo(5, 10);
     * console.log(perimetro); // 30.00
     */
    calcularPerimetroRectangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        return parseFloat((2 * (parseFloat(base) + parseFloat(altura))).toFixed(2));
    }

    /**
     * Calcula el área de un triángulo.
     * @param {number} base - La base del triángulo.
     * @param {number} altura - La altura del triángulo.
     * @returns {number} Resultado del área del triángulo.
     * @throws {Error} Si la base o la altura son menores o iguales a cero.
     * @memberof FiguraService
     * @example
     * const figuraService = new FiguraService();
     * const area = figuraService.calcularAreaTriangulo(5, 10);
     * console.log(area); // 25.00
     */
    calcularAreaTriangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        return parseFloat(((base * altura) / 2).toFixed(2));
    }

    /**
     * Calcula el perímetro de un triángulo.
     * @param {number} base - La base del triángulo.
     * @param {number} altura - La altura del triángulo.
     * @returns {number} Resultado del perímetro del triángulo.
     * @throws {Error} Si la base o la altura son menores o iguales a cero.
     * @memberof FiguraService
     * @example
     * const figuraService = new FiguraService();
     * const perimetro = figuraService.calcularPerimetroTriangulo(5, 10);
     * console.log(perimetro); // 20.00
     */
    calcularPerimetroTriangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        const ladoIgual = Math.sqrt(Math.pow(base/2, 2) + Math.pow(altura, 2));
        return parseFloat((parseFloat(base) + 2 * ladoIgual).toFixed(2));
    }

    /**
     * Calcula el área de un circulo.
     * @param {number} radio - El radio del circulo.
     * @returns {number} Resultado del área del circulo.
     * @throws {Error} Si el radio es menor o igual a cero.
     * @memberof FiguraService
     * @example
     * const figuraService = new FiguraService();
     * const area = figuraService.calcularAreaCirculo(5);
     * console.log(area); // 78.54
     */
    calcularAreaCirculo(radio) {
        if (radio <= 0) {
            throw new Error("El radio debe ser un número positivo.");
        }
        return parseFloat((Math.PI * Math.pow(radio, 2)).toFixed(2));
    }

    /**
     * Calcula el perímetro de un circulo.
     * @param {number} radio - El radio del circulo.
     * @returns {number} Resultado del perímetro del circulo.
     * @throws {Error} Si el radio es menor o igual a cero.
     * @memberof FiguraService
     * @example
     * const figuraService = new FiguraService();
     * const perimetro = figuraService.calcularPerimetroCirculo(5);
     * console.log(perimetro); // 31.42
     */
    calcularPerimetroCirculo(radio) {
        if (radio <= 0) {
            throw new Error("El radio debe ser un número positivo.");
        }
        return parseFloat((2 * Math.PI * radio).toFixed(2));
    }
}

export default FiguraService;