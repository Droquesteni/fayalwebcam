import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologiaComponent } from './meteorologia.component';

describe('MeteorologiaComponent', () => {
  let component: MeteorologiaComponent;
  let fixture: ComponentFixture<MeteorologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteorologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteorologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
