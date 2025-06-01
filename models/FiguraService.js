class FiguraService {
    // Funciones para calcular área y perímetro de figuras geométricas

    //#region Calcula el área y perímetro de un rectángulo
    calcularAreaRectangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        return parseFloat((base * altura).toFixed(2));
    }

    calcularPerimetroRectangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        return parseFloat((2 * (parseFloat(base) + parseFloat(altura))).toFixed(2));
    }
    //#endregion

    //#region Calcula el área y perímetro de un triángulo
    calcularAreaTriangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        return parseFloat(((base * altura) / 2).toFixed(2));
    }

    calcularPerimetroTriangulo(base, altura) {
        if (base <= 0 || altura <= 0) {
            throw new Error("Base y altura deben ser números positivos.");
        }
        const ladoIgual = Math.sqrt(Math.pow(base/2, 2) + Math.pow(altura, 2));
        return parseFloat((parseFloat(base) + 2 * ladoIgual).toFixed(2));
    }
    //#endregion

    //#region Calcula el área y perímetro de un círculo
    calcularAreaCirculo(radio) {
        if (radio <= 0) {
            throw new Error("El radio debe ser un número positivo.");
        }
        return parseFloat((Math.PI * Math.pow(radio, 2)).toFixed(2));
    }

    calcularPerimetroCirculo(radio) {
        if (radio <= 0) {
            throw new Error("El radio debe ser un número positivo.");
        }
        return parseFloat((2 * Math.PI * radio).toFixed(2));
    }
    //#endregion
}

export default FiguraService;