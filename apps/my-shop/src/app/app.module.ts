import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { UiModule } from '@knitting/ui';
import { AccordionModule } from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];

@NgModule({
    declarations: [AppComponent, HomePageComponent, ProductListComponent, FooterComponent, HeaderComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes), UiModule, AccordionModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
