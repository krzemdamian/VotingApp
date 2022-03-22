import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    DividerModule,
    ButtonModule,
    PanelModule,
    FieldsetModule,
    FormsModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    DividerModule,
    ButtonModule,
    PanelModule,
    FieldsetModule,
    FormsModule
  ]
})
export class SharedModule { }
