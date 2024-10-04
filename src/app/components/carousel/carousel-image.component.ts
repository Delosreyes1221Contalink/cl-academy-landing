import { Component, OnInit } from '@angular/core';
import { CarouselImageService } from './carousel-image.service';
import { CarouselImage } from './carousel-image.interface';
import { CarouselModule } from 'primeng/carousel';
import { ImportsModule } from './imports';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css'],
  standalone: true,
  imports: [CarouselModule, ImportsModule],
  providers: [CarouselImageService]
})
export class CarouselImageComponent implements OnInit {

  carouselImages: CarouselImage[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private carouselImageService: CarouselImageService) { }

  ngOnInit(): void {
    this.carouselImageService.getTestimonialsSmall().then((carouselImage) => {
      this.carouselImages = carouselImage;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getCardClass(index: number): string {
    const classes = ['gradient-card-first', 'gradient-card-second', 'gradient-card-third'];
    return classes[index % 3];
  }
} 
