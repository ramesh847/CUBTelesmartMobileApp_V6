import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MywishsecondarycustomerPage } from './mywishsecondarycustomer.page';

describe('MywishsecondarycustomerPage', () => {
  let component: MywishsecondarycustomerPage;
  let fixture: ComponentFixture<MywishsecondarycustomerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MywishsecondarycustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MywishsecondarycustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
