import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCatalogueComponent } from './full-catalogue.component';

describe('FullCatalogueComponent', () => {
  let component: FullCatalogueComponent;
  let fixture: ComponentFixture<FullCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
