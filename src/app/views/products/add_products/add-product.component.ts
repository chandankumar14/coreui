import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
 
  CardBodyComponent,
  CardComponent,
 CardHeaderComponent,
  ColComponent,
  RowComponent,
  ContainerComponent
} from '@coreui/angular';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ContainerComponent,
    RouterLink,
  ]
})
export class AddProductComponent {


}
