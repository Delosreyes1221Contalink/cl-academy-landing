import { NgModule } from "@angular/core";
import { ExtraOptions, Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CourseFormComponent } from "./components/course-form/course-form.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'course-form/:id', component: CourseFormComponent },
];

const routerOptions: ExtraOptions = {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule { }