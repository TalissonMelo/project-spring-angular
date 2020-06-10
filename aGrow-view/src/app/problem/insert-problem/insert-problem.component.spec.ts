import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProblemComponent } from './insert-problem.component';

describe('InsertProblemComponent', () => {
  let component: InsertProblemComponent;
  let fixture: ComponentFixture<InsertProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
