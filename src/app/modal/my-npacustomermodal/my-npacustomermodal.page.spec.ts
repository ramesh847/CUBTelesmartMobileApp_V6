import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyNPAcustomermodalPage } from './my-npacustomermodal.page';

describe('MyNPAcustomermodalPage', () => {
  let component: MyNPAcustomermodalPage;
  let fixture: ComponentFixture<MyNPAcustomermodalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNPAcustomermodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNPAcustomermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
