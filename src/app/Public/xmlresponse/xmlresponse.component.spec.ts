import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMLResponseComponent } from './xmlresponse.component';

describe('XMLResponseComponent', () => {
  let component: XMLResponseComponent;
  let fixture: ComponentFixture<XMLResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMLResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMLResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
