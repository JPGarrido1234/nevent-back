import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenInfoPage } from './token-info.page';

describe('TokenInfoPage', () => {
  let component: TokenInfoPage;
  let fixture: ComponentFixture<TokenInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TokenInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
