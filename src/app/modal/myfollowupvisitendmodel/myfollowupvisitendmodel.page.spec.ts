import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfollowupvisitendmodelPage } from './myfollowupvisitendmodel.page';

describe('MyfollowupvisitendmodelPage', () => {
  let component: MyfollowupvisitendmodelPage;
  let fixture: ComponentFixture<MyfollowupvisitendmodelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfollowupvisitendmodelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfollowupvisitendmodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
