import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AperoListPage } from './apero-list.page';

describe('AperoListPage', () => {
  let component: AperoListPage;
  let fixture: ComponentFixture<AperoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AperoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
