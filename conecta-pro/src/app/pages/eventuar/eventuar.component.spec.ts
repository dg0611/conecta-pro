import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventuarComponent } from './eventuar.component';

describe('EventuarComponent', () => {
  let component: EventuarComponent;
  let fixture: ComponentFixture<EventuarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventuarComponent]
    });
    fixture = TestBed.createComponent(EventuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
