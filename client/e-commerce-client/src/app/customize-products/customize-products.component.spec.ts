import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeProductsComponent } from './customize-products.component';

describe('CustomizeProductsComponent', () => {
  let component: CustomizeProductsComponent;
  let fixture: ComponentFixture<CustomizeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
