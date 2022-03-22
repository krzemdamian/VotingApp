import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    DividerModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    DividerModule
  ]
})
export class SharedModule { }
