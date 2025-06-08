import FiguraService from '../models/FiguraService.js';

describe('Areas API', () => {
    it('Calcula el perímetro de un rectángulo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularPerimetroRectangulo(5, 10);
        console.log(response);
        expect(response).toBe(30.00);
    });
    it('Calcula el perímetro de un triángulo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularPerimetroTriangulo(5);
        console.log(response);
        expect(response).toBe(15.00);
    });
    it('Calcula el perímetro de un circulo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularPerimetroCirculo(5);
        console.log(response);
        expect(response).toBe(31.42);
    });
    it('Calcula el perímetro de un cuadrado', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularPerimetroCuadrado(5);
        console.log(response);
        expect(response).toBe(20.00);
    });
    it('Calcula el perímetro de un trapecio', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularPerimetroTrapecio(5, 10, 8);
        console.log(response);
        expect(response).toBe(31.76);
    });
    it('Calcula el perímetro de un rombo', () => {
        const _figuraService = new FiguraService();
        const response = _figuraService.calcularPerimetroRombo(5,10);
        console.log(response);
        expect(response).toBe(22.36);
    });
}); 