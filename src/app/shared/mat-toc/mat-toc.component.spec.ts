import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTocComponent } from './mat-toc.component';

describe('MatTocComponent', () => {
  let component: MatTocComponent;
  let fixture: ComponentFixture<MatTocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
