import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCreateComponent } from './dash-create.component';

describe('DashCreateComponent', () => {
  let component: DashCreateComponent;
  let fixture: ComponentFixture<DashCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
