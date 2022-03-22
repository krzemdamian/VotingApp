import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    DividerModule,
    ButtonModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    DividerModule,
    ButtonModule
  ]
})
export class SharedModule { }
