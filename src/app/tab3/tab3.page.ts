import { Component } from '@angular/core';
import { PhotoService } from "../services/photo.service"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  mostrarFotos = false;

  constructor(public photoService:PhotoService) {}


}
