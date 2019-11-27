import { Component } from '@angular/core';
import { AuthFirebaseService } from '../services/auth-firebase.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private authFirebaseService: AuthFirebaseService) {}

  logout() {
    this.authFirebaseService.logout();
    console.log('logout');
  }
}
