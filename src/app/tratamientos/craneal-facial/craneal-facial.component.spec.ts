import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranealFacialComponent } from './craneal-facial.component';

describe('CranealFacialComponent', () => {
  let component: CranealFacialComponent;
  let fixture: ComponentFixture<CranealFacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CranealFacialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CranealFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
