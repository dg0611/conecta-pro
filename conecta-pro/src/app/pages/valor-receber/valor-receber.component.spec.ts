import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorReceberComponent } from './valor-receber.component';

describe('ValorReceberComponent', () => {
  let component: ValorReceberComponent;
  let fixture: ComponentFixture<ValorReceberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorReceberComponent]
    });
    fixture = TestBed.createComponent(ValorReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
