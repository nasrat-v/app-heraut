import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { AgmCoreModule } from "@agm/core";
import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab2Page }]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    })
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}