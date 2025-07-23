import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
  standalone: false
})
export class PhotoViewerComponent implements OnInit {
  @Input() photo: any;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  close() {
    this.modalCtrl.dismiss();
  }

}
