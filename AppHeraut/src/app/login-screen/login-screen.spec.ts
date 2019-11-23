import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginScreen } from './login-screen';

describe('LoginScreen', () => {
  let component: LoginScreen;
  let fixture: ComponentFixture<LoginScreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginScreen],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
