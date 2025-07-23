import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {


    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setOverlaysWebView({ overlay: false });

  }
}
