import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialProblemComponent } from './initial-problem.component';

describe('InitialProblemComponent', () => {
  let component: InitialProblemComponent;
  let fixture: ComponentFixture<InitialProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
