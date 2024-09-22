import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormControlDirective, FormLabelDirective, FormDirective, FormSelectDirective, GutterDirective } from '@coreui/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.component.html',
  styleUrls: ['./completed-order.component.scss'],
  standalone: true,
  imports: [RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormFloatingDirective,
    FormControlDirective,
    FormLabelDirective,
    ReactiveFormsModule,
    AgGridAngular,
    FormsModule,
    FormDirective,
    NgStyle,
    FormSelectDirective,
    GutterDirective]
})
export class CompletedOrderComponent {

  constructor() { }

  colDefs: ColDef[] = [
    { field: "orderId" },
    { field: "product" },
    { field: "price" },
    { field: "userName" },
    { field: "Status" }
  ];
  rowData = [
    {orderId:"AK635", product: "Tesla", userName: " Y", price: 64950, Status: true },
    {orderId:"AK635", product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
    { orderId:"AK635",product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
    { orderId:"AK635",product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
    {orderId:"AK635", product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
  ];

}
