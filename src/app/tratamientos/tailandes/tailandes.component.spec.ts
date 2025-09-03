import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailandesComponent } from './tailandes.component';

describe('TailandesComponent', () => {
  let component: TailandesComponent;
  let fixture: ComponentFixture<TailandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
