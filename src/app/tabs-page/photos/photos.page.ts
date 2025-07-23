import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { PhotoViewerComponent } from 'src/app/components/modals/photo-viewer/photo-viewer.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
  standalone: false
})
export class PhotosPage implements OnInit {
  photos: { webviewPath: string }[] = [];

  ngOnInit(): void {

  }

  constructor(private modalCtrl: ModalController) { }

  async addPhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    });

    this.photos.push({ webviewPath: capturedPhoto.webPath! });
  }

  async viewPhoto(index: number) {
    const modal = await this.modalCtrl.create({
      component: PhotoViewerComponent,
      componentProps: { photo: this.photos[index] }
    });
    await modal.present();
  }

}
