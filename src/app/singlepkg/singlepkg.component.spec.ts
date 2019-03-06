import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepkgComponent } from './singlepkg.component';

describe('SinglepkgComponent', () => {
  let component: SinglepkgComponent;
  let fixture: ComponentFixture<SinglepkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
