import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForSaleContainerComponent } from './container/for-sale-container/for-sale-container.component';

const routes: Routes = [
    {
        path: '',
        component: ForSaleContainerComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForSaleRoutingModule { }
