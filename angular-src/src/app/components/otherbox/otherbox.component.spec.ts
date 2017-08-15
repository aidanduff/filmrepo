import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherboxComponent } from './otherbox.component';

describe('OtherboxComponent', () => {
  let component: OtherboxComponent;
  let fixture: ComponentFixture<OtherboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
