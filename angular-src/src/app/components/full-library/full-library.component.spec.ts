import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLibraryComponent } from './full-library.component';

describe('FullLibraryComponent', () => {
  let component: FullLibraryComponent;
  let fixture: ComponentFixture<FullLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
