import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us.routing.module';
import { AboutUsComponent } from './component/about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
