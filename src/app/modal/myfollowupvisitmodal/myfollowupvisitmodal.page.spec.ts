import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfollowupvisitmodalPage } from './myfollowupvisitmodal.page';

describe('MyfollowupvisitmodalPage', () => {
  let component: MyfollowupvisitmodalPage;
  let fixture: ComponentFixture<MyfollowupvisitmodalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfollowupvisitmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfollowupvisitmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
