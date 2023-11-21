import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public photos: UserPhoto[] = [];


  public async addNewToGallery() {
    // Tomar una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Añadir la foto al inicio del array
    this.photos.unshift({
      filepath: "soon...", // Necesitas actualizar esto con la ruta del archivo
      webviewPath: capturedPhoto.webPath!
    });

    // Guardar las fotos en el Local Storage
    await this.savePhotos();
  }

  private async savePhotos() {
    await Preferences.set({
      key: 'photos',
      value: JSON.stringify(this.photos)
    });
  }

  public async loadSavedPhotos() {
    const photosResult = await Preferences.get({ key: 'photos' });
    
    if (photosResult.value) {
      this.photos = JSON.parse(photosResult.value);
    } else {
      this.photos = [];
    }

  }



  public async deletePhoto(photo: UserPhoto) {
    // Borrar la foto del almacenamiento del dispositivo
    if (photo.filepath) {
      await Filesystem.deleteFile({
        path: photo.filepath,
        directory: Directory.Data // o el directorio correcto donde se guardó la foto
      });
    }

    // Eliminar la referencia de la foto del array
    this.photos = this.photos.filter(p => p.filepath !== photo.filepath);

    // Actualizar Local Storage
    await this.savePhotos();
  }


//  public async deletePhoto(index: number) {
//     this.photos.splice(index, 1); // Elimina la foto del array
//     await this.savePhotos(); // Actualiza el Local Storage
//   }


}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
