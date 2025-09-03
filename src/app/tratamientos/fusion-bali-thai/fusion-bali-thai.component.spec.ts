import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionBaliThaiComponent } from './fusion-bali-thai.component';

describe('FusionBaliThaiComponent', () => {
  let component: FusionBaliThaiComponent;
  let fixture: ComponentFixture<FusionBaliThaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionBaliThaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionBaliThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
