import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },

    // {
    //     path:'products/:id',
    //     component:SingleproductComponent
    // },
    {
        path:'products',
        component:ProductsComponent
    },

];
