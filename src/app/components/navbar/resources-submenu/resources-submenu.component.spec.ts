import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesSubmenuComponent } from './resources-submenu.component';

describe('ResourcesSubmenuComponent', () => {
  let component: ResourcesSubmenuComponent;
  let fixture: ComponentFixture<ResourcesSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesSubmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
