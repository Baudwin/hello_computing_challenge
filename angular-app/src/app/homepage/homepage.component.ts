import { Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component'
import {NavbarComponent} from '../navbar/navbar.component'
import {BillingAddressComponent} from '../billing-address/billing-address.component'
import {DataService} from '../services/data.service'
import {NewAddressComponent} from '../new-address/new-address.component'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ FooterComponent, NavbarComponent, BillingAddressComponent, NewAddressComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
private addressUrl = 'http://localhost:8080/billing-addresses'
private contentUrl = 'http://localhost:8080/page-content'

constructor(private dataService:DataService){}
addressData:any
pageContent:any


ngOnInit(): void {
this.dataService.getPageData(this.addressUrl).subscribe(data=>{
  this.addressData = data.data
  console.log(this.addressData)
})

this.dataService.getPageData(this.contentUrl).subscribe(data=>{
  this.pageContent = data
  console.log(this.pageContent)
})

}

}
