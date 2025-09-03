import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexologiaComponent } from './reflexologia.component';

describe('ReflexologiaComponent', () => {
  let component: ReflexologiaComponent;
  let fixture: ComponentFixture<ReflexologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
