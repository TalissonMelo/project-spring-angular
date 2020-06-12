import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAdminComponent } from './initial-admin.component';

describe('InitialAdminComponent', () => {
  let component: InitialAdminComponent;
  let fixture: ComponentFixture<InitialAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
