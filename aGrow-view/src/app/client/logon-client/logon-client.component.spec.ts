import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonClientComponent } from './logon-client.component';

describe('LogonClientComponent', () => {
  let component: LogonClientComponent;
  let fixture: ComponentFixture<LogonClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogonClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
