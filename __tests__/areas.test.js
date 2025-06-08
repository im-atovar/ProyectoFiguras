import FiguraService from '../models/FiguraService.js';

describe('Areas Test', () => {
    it('Calcula el área de un rectángulo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularAreaRectangulo(5, 10);
        console.log(response);
        expect(response).toBe(50.00);
    });

    it('Calcula el área de un triángulo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularAreaTriangulo(5, 10);
        console.log(response);
        expect(response).toBe(25.00);
    });

    it('Calcula el área de un circulo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularAreaCirculo(5);
        console.log(response);
        expect(response).toBe(78.54);
    });

    it('Calcula el área de un cuadrado', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularAreaCuadrado(5);
        console.log(response);
        expect(response).toBe(25.00);
    });

    it('Calcula el área de un trapecio', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularAreaTrapecio(5, 10, 8);
        console.log(response);
        expect(response).toBe(60.00);
    });
    
    it('Calcula el área de un rombo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularAreaRombo(5, 10);
        console.log(response);
        expect(response).toBe(25.00);
    });
}); 