import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontracturanteComponent } from './descontracturante.component';

describe('DescontracturanteComponent', () => {
  let component: DescontracturanteComponent;
  let fixture: ComponentFixture<DescontracturanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescontracturanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescontracturanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
