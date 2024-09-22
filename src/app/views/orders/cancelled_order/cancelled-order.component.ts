import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-cancelled-order',
  templateUrl: './cancelled-order.component.html',
  styleUrls: ['./cancelled-order.component.scss'],
  standalone: true,
  imports: [RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    ButtonDirective,
    AgGridAngular,
    NgStyle]
})
export class CancelledOrderComponent  implements OnInit{

  
  constructor() { }
  ngOnInit(){
    
  }

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
