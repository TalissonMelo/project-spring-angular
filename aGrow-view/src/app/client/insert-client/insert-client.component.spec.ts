import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClientComponent } from './insert-client.component';

describe('InsertClientComponent', () => {
  let component: InsertClientComponent;
  let fixture: ComponentFixture<InsertClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
