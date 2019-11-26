import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AperoService, Apero } from 'src/app/services/apero.service';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-apero-list',
  templateUrl: './apero-list.page.html',
  styleUrls: ['./apero-list.page.scss'],
})
export class AperoListPage implements OnInit {

  private aperos: Observable<Apero[]>;

  constructor(private aperoService: AperoService,
    public authFirebaseService: AuthFirebaseService) { 
  }

  ngOnInit() {
    this.aperos = this.aperoService.getAperos();
  }

  //fonction à utiliser grace aux notification push
  //user_id et apero_id
  joinApero() {
    this.aperoService.joinApero("ITaggEVnWNavtUaFHG9X2dOs6CB2", "XKphGpO6Gb5AiGER4jnT");

  }

}
