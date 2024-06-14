import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Smart Check-out"', () => {
    component.title = 'Smart Check-out';
    fixture.detectChanges();
    expect(component.title).toEqual('Smart Check-out');
  });

  it(`should render title`, () => {
   component.title = 'Smart Check-out';
  fixture.detectChanges()
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('p')?.textContent).toContain('Smart Check-out')
  });

});
