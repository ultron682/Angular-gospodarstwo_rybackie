import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForSaleRoutingModule } from './for-sale-routing';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ForSaleContainerComponent } from './container/for-sale-container/for-sale-container.component';
import { ForSaleFavoriteComponent } from './components/products-list/for-sale-favorite/for-sale-favorite.component';

@NgModule({
  imports: [
    CommonModule,
    ForSaleRoutingModule,
    NgxGalleryModule
  ],
  declarations: [
    ForSaleContainerComponent,
    ForSaleFavoriteComponent
  ],
})
export class ForSaleModule { }
