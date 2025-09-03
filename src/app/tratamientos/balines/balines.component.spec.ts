import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalinesComponent } from './balines.component';

describe('BalinesComponent', () => {
  let component: BalinesComponent;
  let fixture: ComponentFixture<BalinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
