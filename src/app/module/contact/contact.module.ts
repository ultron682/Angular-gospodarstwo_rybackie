import { MaterialModule } from './../../material';
import { ContactComponent } from './component/contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
