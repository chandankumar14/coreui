import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  RowComponent,
  FormDirective,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridReadyEvent, IFilterParams } from 'ag-grid-community';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ReactiveFormsModule,
    FormDirective,
    AgGridAngular,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    CardBodyComponent,
  ],
})
export class ActiveOrderComponent implements OnInit {
  rowData=[]
  rowClass: string | undefined;
  private gridApi!: GridApi<any>;
  constructor() {}
  ngOnInit() {}
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    if (this.rowData) {
      this.gridApi
    }
  }

  public ColumnDefs = [
    {
      headerName: 'Supplier Name',
      field: 'supplier_name',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    {
      headerName: 'Type',
      field: 'supply_type',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 130,
    },
    {
      headerName: 'Coverage',
      field: 'address',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 0.5,
      minWidth: 130,
    },
    {
      headerName: 'Contact No.',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 130,
      valueGetter: (params: any) => {
        return params.data.Contact_Info && params.data.Contact_Info[0]
          ? params.data.Contact_Info[0].Phone_Number
          : '';
      },
    },
    {
      headerName: 'Link',
      field: 'supplier_link',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 130,
    },
    {
      headerName: 'Verification Status',
      field: 'varification_status',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 0.5,
      minWidth: 130,
      valueGetter: (params: any) => {
        return params.data.varification_status ? 'Verified' : 'Unverified';
      },
    },
    {
      headerName: 'Verification Date',
      field: 'varification_status',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 130,
      valueGetter: (params: any) => {
        return params.data.varification_date
          ? params?.data?.varification_date
          : '2024-06-20';
      },
    },
    {
      headerName: 'Verified By',
      field: 'action',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 130,
      valueGetter: (params: any) => {
        return params.data.verifiedBy ? params.data.verifiedBy : 'null';
      },
    },
    {
      headerName: 'Action',
      field: 'id',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 130,
      cellRenderer: '',
      cellRendererParams: {
        className: 'mat-blue',
        hideRequestButton: true,
        hideDetailsButton: false,
        hideDownloadIcon: false,
        showCustomIcon: false,
      },
    },
  ];

}
