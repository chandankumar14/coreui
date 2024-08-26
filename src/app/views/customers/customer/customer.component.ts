import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './customer.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
  ],
})
export class ButtonsComponent {
  
  
}
