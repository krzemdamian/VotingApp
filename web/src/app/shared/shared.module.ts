import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule
  ],
  exports: [
    TableModule,
    DropdownModule
  ]
})
export class SharedModule { }
