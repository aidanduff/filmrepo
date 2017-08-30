import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingSandboxComponent } from './testing-sandbox.component';

describe('TestingSandboxComponent', () => {
  let component: TestingSandboxComponent;
  let fixture: ComponentFixture<TestingSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
