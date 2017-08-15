import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgimageComponent } from './bgimage.component';

describe('BgimageComponent', () => {
  let component: BgimageComponent;
  let fixture: ComponentFixture<BgimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
