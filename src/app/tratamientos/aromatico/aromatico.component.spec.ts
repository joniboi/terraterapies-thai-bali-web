import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaticoComponent } from './aromatico.component';

describe('AromaticoComponent', () => {
  let component: AromaticoComponent;
  let fixture: ComponentFixture<AromaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
