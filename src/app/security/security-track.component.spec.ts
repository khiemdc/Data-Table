import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTrackComponent } from './security-track.component';

describe('SecurityTrackComponent', () => {
  let component: SecurityTrackComponent;
  let fixture: ComponentFixture<SecurityTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
