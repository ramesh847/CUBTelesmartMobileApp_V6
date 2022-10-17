import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfollowupcallconnectPage } from './myfollowupcallconnect.page';

describe('MyfollowupcallconnectPage', () => {
  let component: MyfollowupcallconnectPage;
  let fixture: ComponentFixture<MyfollowupcallconnectPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfollowupcallconnectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfollowupcallconnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
