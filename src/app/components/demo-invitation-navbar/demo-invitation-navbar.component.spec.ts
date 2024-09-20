import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInvitationNavbarComponent } from './demo-invitation-navbar.component';

describe('DemoInvitationNavbarComponent', () => {
  let component: DemoInvitationNavbarComponent;
  let fixture: ComponentFixture<DemoInvitationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInvitationNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoInvitationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
