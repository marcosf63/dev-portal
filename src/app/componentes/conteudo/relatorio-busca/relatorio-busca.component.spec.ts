import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioBuscaComponent } from './relatorio-busca.component';

describe('RelatorioBuscaComponent', () => {
  let component: RelatorioBuscaComponent;
  let fixture: ComponentFixture<RelatorioBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
