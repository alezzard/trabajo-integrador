import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAcademicaComponent } from './exp-academica.component';

describe('ExpAcademicaComponent', () => {
  let component: ExpAcademicaComponent;
  let fixture: ComponentFixture<ExpAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAcademicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
