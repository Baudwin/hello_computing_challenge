import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-address',
  standalone: true,
  imports: [],
  templateUrl: './new-address.component.html',
  styleUrl: './new-address.component.css'
})
export class NewAddressComponent {
  @Input() addNewAddress: any;
}
