import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomisePage } from './customise.page';

describe('CustomisePage', () => {
  let component: CustomisePage;
  let fixture: ComponentFixture<CustomisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
