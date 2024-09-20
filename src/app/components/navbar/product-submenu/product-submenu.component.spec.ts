import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubmenuComponent } from './product-submenu.component';

describe('ProductSubmenuComponent', () => {
  let component: ProductSubmenuComponent;
  let fixture: ComponentFixture<ProductSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
