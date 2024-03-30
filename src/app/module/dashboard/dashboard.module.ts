import { DashboardTextCareComponent } from './presenter/dashboard-text-care/dashboard-text-care.component';
import { DashboardMiniGalleryComponent } from './presenter/dashboard-mini-gallery/dashboard-mini-gallery.component';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { DashboardHeaderComponent } from './presenter/dashboard-header/dashboard-header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainTextComponent } from './presenter/dashboard-main-text/dashboard-main-text.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxGalleryModule
  ],
  declarations: [
    DashboardMainTextComponent,
    DashboardHeaderComponent,
    DashboardContainerComponent,
    DashboardMiniGalleryComponent,
    DashboardTextCareComponent
  ]
})
export class DashboardModule { }
