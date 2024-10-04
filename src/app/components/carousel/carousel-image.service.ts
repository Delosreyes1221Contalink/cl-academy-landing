import { Injectable } from '@angular/core';
    
@Injectable()
export class CarouselImageService {
    getTestimonialsData() {
        return [
            {
                id: 1,
                name: 'Sergio Porras',
                description: `"El curso fue de gran utilidad, muy bien estructurado y con excelente atención . Agradezco mucho la dedicación y el enfoque práctico que brindaron"`,
            },
            {
                id: 2,
                name: 'Jose Anguiano',
                description: `"Muchas gracias por el curso que impartieron y todo el aprendizaje que me proporcionaron."`,
            },
            {
                id: 3,
                name: 'Armando Gutiérrez',
                description: `"Gracias por brindar este curso, tuve la oportunidad de conocer el sistema. Contalink es una herramienta que realmente facilita el trabajo contable."`
            },
            {
                id: 4,
                name: 'Raul Mendez',
                description: `"Tomar el curso fue una experiencia muy positiva y enriquecedora."`
            },
            {
                id: 5,
                name: 'Diana Vargas',
                description: `"El curso está muy bien explicado y el contenido es bastante completo."`
            },
            {
                id: 6,
                name: 'Edgar Avendaño',
                description: `"El curso fue excelente, me permitió poder conocer el software contable de Contalink. El material proporcionado fue claro y útil."`
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