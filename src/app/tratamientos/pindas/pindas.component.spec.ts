import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindasComponent } from './pindas.component';

describe('PindasComponent', () => {
  let component: PindasComponent;
  let fixture: ComponentFixture<PindasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PindasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
