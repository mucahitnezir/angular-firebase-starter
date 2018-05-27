import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolityComponent } from './privacy-polity.component';

describe('PrivacyPolityComponent', () => {
  let component: PrivacyPolityComponent;
  let fixture: ComponentFixture<PrivacyPolityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
