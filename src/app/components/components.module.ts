import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { DemoInvitationNavbarComponent } from './demo-invitation-navbar/demo-invitation-navbar.component';
import { HomeComponent } from './home/home.component';
import { ChevronDownComponent } from './icons/chevron-down/chevron-down.component';
import { ChevronUpComponent } from './icons/chevron-up/chevron-up.component';
import { NavbarComponent  } from './navbar/navbar.component';
import { ProductSubmenuComponent } from './navbar/product-submenu/product-submenu.component';
import { ResourcesSubmenuComponent } from './navbar/resources-submenu/resources-submenu.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CarouselImageComponent } from './carousel/carousel-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CourseFormComponent,
        DemoInvitationNavbarComponent,
        HomeComponent,
        ChevronDownComponent,
        ChevronUpComponent,
        NavbarComponent,
        ProductSubmenuComponent,
        ResourcesSubmenuComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CarouselImageComponent,
        RouterModule
    ],
    exports: [
        CourseFormComponent,
        DemoInvitationNavbarComponent,
        HomeComponent,
        ChevronDownComponent,
        ChevronUpComponent,
        NavbarComponent,
        ProductSubmenuComponent,
        ResourcesSubmenuComponent
    ]
})

export class ComponentsModule { }