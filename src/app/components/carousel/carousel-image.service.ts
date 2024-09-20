import { Injectable } from '@angular/core';
    
@Injectable()
export class CarouselImageService {
    getTestimonialsData() {
        return [
            {
                name: 'Sergio Eduardo Porras Rubio',
                description: 'El curso fue de gran utilidad, muy bien estructurado y con excelente atención . Agradezco mucho la dedicación y el enfoque práctico que brindaron',
            },
            {
                name: 'Jose de Jesús Anguiano Sotelo',
                description: 'Muchas gracias por el curso que impartieron y todo el aprendizaje que me proporcionaron.',
            },
            {
                name: 'Armando Gutiérrez Elizalde',
                description: 'Gracias por brindar este curso, tuve la oportunidad de conocer el sistema. Contalink es una herramienta que realmente facilita el trabajo contable.'
            },
            {
                name: 'Raul Antonio Mendez Cantu',
                description: 'Tomar el curso fue una experiencia muy positiva y enriquecedora.'
            },
            {
                name: 'Diana Vargas Torrez',
                description: 'El curso está muy bien explicado y el contenido es bastante completo.'
            },
            {
                name: 'Edgar Avendaño Vera',
                description: 'El curso fue excelente, me permitió poder conocer el software contable de Contalink. El material proporcionado fue claro y útil.'
            }
        ];
    }


    getTestimonialsSmall() {
        return Promise.resolve(this.getTestimonialsData().slice(0, 10));
    }

    getAllTestimonials() {
        return Promise.resolve(this.getTestimonialsData());
    }
};