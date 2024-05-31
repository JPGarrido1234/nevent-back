import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenMessagesPage } from './token-messages.page';

describe('TokenMessagesPage', () => {
  let component: TokenMessagesPage;
  let fixture: ComponentFixture<TokenMessagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TokenMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
