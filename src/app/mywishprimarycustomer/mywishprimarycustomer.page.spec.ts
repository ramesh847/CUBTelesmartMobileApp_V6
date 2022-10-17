import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MywishprimarycustomerPage } from './mywishprimarycustomer.page';

describe('MywishprimarycustomerPage', () => {
  let component: MywishprimarycustomerPage;
  let fixture: ComponentFixture<MywishprimarycustomerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MywishprimarycustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MywishprimarycustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
