import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LomiLomiComponent } from './lomi-lomi.component';

describe('LomiLomiComponent', () => {
  let component: LomiLomiComponent;
  let fixture: ComponentFixture<LomiLomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LomiLomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LomiLomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
