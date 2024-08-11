import { Component } from '@angular/core';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, ContainerComponent } from '@coreui/angular';

@Component({
  selector: 'app-add-variant',
  templateUrl: './add-variant.component.html',
  styleUrls: ['./add-variant.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
   ContainerComponent
  ]
})
export class AddVariantComponent {

  constructor() { }

}
