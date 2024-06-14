import { TestBed } from '@angular/core/testing';
import {DataService} from './data.service'
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

describe('AddressDataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], // Include HttpClientTestingModule in the imports
        providers: [DataService] // Provide the DataService
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve page data', () => {
    const dummyData = { key: 'value' }; // Sample data
    const url = 'https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json';

    service.getPageData(url).subscribe(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData); 
  });


  it('should retrieve address data', () => {
    const dummyAddressData = {  key: 'value' };
    const addressDataUrl = 'https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json';
    service.getAddressData(addressDataUrl).subscribe(data => {
        expect(data).toEqual(dummyAddressData);
    });

    const req = httpMock.expectOne(addressDataUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAddressData); 
  });

});
