import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-billing-address',
  standalone: true,
  imports: [],
  templateUrl: './billing-address.component.html',
  styleUrl: './billing-address.component.css'
})
export class BillingAddressComponent {
  @Input() addresses: any;
}
