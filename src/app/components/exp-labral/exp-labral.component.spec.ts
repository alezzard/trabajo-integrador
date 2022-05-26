import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLabralComponent } from './exp-labral.component';

describe('ExpLabralComponent', () => {
  let component: ExpLabralComponent;
  let fixture: ComponentFixture<ExpLabralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpLabralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpLabralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
