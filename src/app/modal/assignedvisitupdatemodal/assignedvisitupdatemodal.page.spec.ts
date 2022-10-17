import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignedvisitupdatemodalPage } from './assignedvisitupdatemodal.page';

describe('AssignedvisitupdatemodalPage', () => {
  let component: AssignedvisitupdatemodalPage;
  let fixture: ComponentFixture<AssignedvisitupdatemodalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedvisitupdatemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignedvisitupdatemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
