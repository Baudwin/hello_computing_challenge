import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as heading 'SELECT BILLING ADDRESS'`, () => {
    component.pageContent = {
      content: {
        heading: 'SELECT BILLING ADDRESS',
      }
    };
    const homepage = fixture.componentInstance;
    expect(homepage.pageContent.content.heading).toEqual('SELECT BILLING ADDRESS');
  });
  

  it(`should render heading`, () => {
    component.pageContent = {
      content: {
        heading: 'SELECT BILLING ADDRESS',
      }
    };
  fixture.detectChanges() 
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('h2')?.textContent).toContain("SELECT BILLING ADDRESS")
  });

});
