import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProblemComponent } from './admin-problem.component';

describe('AdminProblemComponent', () => {
  let component: AdminProblemComponent;
  let fixture: ComponentFixture<AdminProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
