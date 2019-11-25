import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private route: ActivatedRoute
  private router: Router

  constructor() {
  }

}
