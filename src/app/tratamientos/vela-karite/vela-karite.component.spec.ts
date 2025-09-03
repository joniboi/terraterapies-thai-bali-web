import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelaKariteComponent } from './vela-karite.component';

describe('VelaKariteComponent', () => {
  let component: VelaKariteComponent;
  let fixture: ComponentFixture<VelaKariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelaKariteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelaKariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
