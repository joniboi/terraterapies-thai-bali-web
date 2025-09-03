import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedrasCalientesComponent } from './piedras-calientes.component';

describe('PiedrasCalientesComponent', () => {
  let component: PiedrasCalientesComponent;
  let fixture: ComponentFixture<PiedrasCalientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedrasCalientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedrasCalientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
