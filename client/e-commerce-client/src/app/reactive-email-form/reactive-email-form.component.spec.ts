import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEmailFormComponent } from './reactive-email-form.component';

describe('ReactiveEmailFormComponent', () => {
  let component: ReactiveEmailFormComponent;
  let fixture: ComponentFixture<ReactiveEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveEmailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
