import { Component } from '@angular/core';
import { PhotoService } from "../services/photo.service"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  mostrarFotos = false;
  constructor(public photoService:PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  // Método para tomar las fotos al 50% de calidad
  addPhotoToGalleryHalfQuality() {
    this.photoService.addNewToGalleryHalfQuality();
  }

  
}
