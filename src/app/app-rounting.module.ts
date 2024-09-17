import { NgModule } from "@angular/core";
import { ExtraOptions, Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
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