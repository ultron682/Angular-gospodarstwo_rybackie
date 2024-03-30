import { ContactRoutingModule } from './module/contact/contact.routing.module';
import { LayoutComponent } from './core/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'for-sale',
    component: LayoutComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        loadChildren: () => import('./module/for-sale/for-sale.module').then(m => m.ForSaleModule)
      },
    ]

  },
  {
    path: 'contact',
    component: LayoutComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        loadChildren: () => import('./module/contact/contact.module').then(m => m.ContactModule)
      },
    ]

  },

  {
    path: '',
    component: LayoutComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]

  },

  {
    path: 'about-us',
    component: LayoutComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        loadChildren: () => import('./module/about-us/about-us.module').then(m => m.AboutUsModule)
      },
    ]

  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
