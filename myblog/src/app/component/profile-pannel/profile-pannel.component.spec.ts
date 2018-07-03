import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePannelComponent } from './profile-pannel.component';

describe('ProfilePannelComponent', () => {
  let component: ProfilePannelComponent;
  let fixture: ComponentFixture<ProfilePannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
