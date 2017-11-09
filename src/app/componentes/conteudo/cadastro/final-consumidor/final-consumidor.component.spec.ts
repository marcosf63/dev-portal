import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalConsumidorComponent } from './final-consumidor.component';

describe('FinalConsumidorComponent', () => {
  let component: FinalConsumidorComponent;
  let fixture: ComponentFixture<FinalConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
