import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as copyright notice "© 2018 - Hotel Beacons GmbH"', () => {
    component.data = '© 2018 - Hotel Beacons GmbH';
    fixture.detectChanges();
    expect(component.data).toEqual('© 2018 - Hotel Beacons GmbH');
  });

  it(`should render copyright notice`, () => {
   component.data = '© 2018 - Hotel Beacons GmbH';
  fixture.detectChanges()
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('p')?.textContent).toContain('© 2018 - Hotel Beacons GmbH')
  });

});
