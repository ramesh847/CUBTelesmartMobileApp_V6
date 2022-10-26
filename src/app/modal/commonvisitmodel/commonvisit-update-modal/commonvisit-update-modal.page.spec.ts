import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonvisitUpdateModalPage } from './commonvisit-update-modal.page';

describe('CommonvisitUpdateModalPage', () => {
  let component: CommonvisitUpdateModalPage;
  let fixture: ComponentFixture<CommonvisitUpdateModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonvisitUpdateModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonvisitUpdateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
