import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaDarkComponent } from './social-media-dark.component';

describe('SocialMediaDarkComponent', () => {
  let component: SocialMediaDarkComponent;
  let fixture: ComponentFixture<SocialMediaDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaDarkComponent]
    });
    fixture = TestBed.createComponent(SocialMediaDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
