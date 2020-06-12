import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProblemComponent } from './register-problem.component';

describe('RegisterProblemComponent', () => {
  let component: RegisterProblemComponent;
  let fixture: ComponentFixture<RegisterProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
