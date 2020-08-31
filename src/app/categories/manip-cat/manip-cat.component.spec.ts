import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipCatComponent } from './manip-cat.component';

describe('ManipCatComponent', () => {
  let component: ManipCatComponent;
  let fixture: ComponentFixture<ManipCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
