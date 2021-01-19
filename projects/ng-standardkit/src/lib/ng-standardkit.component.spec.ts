import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStandardkitComponent } from './ng-standardkit.component';

describe('NgStandardkitComponent', () => {
  let component: NgStandardkitComponent;
  let fixture: ComponentFixture<NgStandardkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStandardkitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStandardkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
