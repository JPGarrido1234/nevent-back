import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpgradeFeaturedComponent } from './upgrade-featured.component';

describe('UpgradeFeaturedComponent', () => {
  let component: UpgradeFeaturedComponent;
  let fixture: ComponentFixture<UpgradeFeaturedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeFeaturedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpgradeFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
