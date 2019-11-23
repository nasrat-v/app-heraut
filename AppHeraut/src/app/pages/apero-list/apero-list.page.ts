import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AperoService, Apero } from 'src/app/services/apero.service';

@Component({
  selector: 'app-apero-list',
  templateUrl: './apero-list.page.html',
  styleUrls: ['./apero-list.page.scss'],
})
export class AperoListPage implements OnInit {

  private aperos: Observable<Apero[]>;

  constructor(private aperoService: AperoService) { }

  ngOnInit() {
    this.aperos = this.aperoService.getAperos();
  }

}
