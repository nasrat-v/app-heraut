import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation, Modals } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  title = 'app-heraut';
  latitude: number;
  longitude: number;

  constructor() {
    this.getLocation();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }
}