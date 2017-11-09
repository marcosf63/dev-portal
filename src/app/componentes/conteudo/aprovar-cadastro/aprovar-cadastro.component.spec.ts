import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarCadastroComponent } from './aprovar-cadastro.component';

describe('AprovarCadastroComponent', () => {
  let component: AprovarCadastroComponent;
  let fixture: ComponentFixture<AprovarCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
