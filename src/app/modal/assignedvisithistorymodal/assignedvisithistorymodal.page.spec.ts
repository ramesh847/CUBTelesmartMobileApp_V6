import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignedvisithistorymodalPage } from './assignedvisithistorymodal.page';

describe('AssignedvisithistorymodalPage', () => {
  let component: AssignedvisithistorymodalPage;
  let fixture: ComponentFixture<AssignedvisithistorymodalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedvisithistorymodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignedvisithistorymodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
