import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalhamentoEventuarComponent } from './dialog-detalhamento-eventuar.component';

describe('DialogDetalhamentoEventuarComponent', () => {
  let component: DialogDetalhamentoEventuarComponent;
  let fixture: ComponentFixture<DialogDetalhamentoEventuarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDetalhamentoEventuarComponent]
    });
    fixture = TestBed.createComponent(DialogDetalhamentoEventuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
