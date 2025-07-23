import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Swiper } from 'swiper/types';
import { IonicSlides } from '@ionic/angular';
import { SwiperContainer } from 'swiper/element';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: false,
})

export class WelcomePage implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  isLastSlide = false;
  swiper?: Swiper;
  swiperModules = [IonicSlides];

  constructor(
    public platform: Platform,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  slides = [
    {
      title: 'Welcome!',
      description: 'This is an amazing app for you!',
      color: '#ff5733' // Red
    },
    {
      title: 'Stay Organized',
      description: 'Manage tasks efficiently with our app!',
      color: '#33c1ff' // Blue
    },
    {
      title: 'Get Started',
      description: 'Sign up and start using our app today!',
      color: '#28a745' // Green
    }
  ];

  onSwiper(swiperInstance: Swiper) {
    this.swiper = swiperInstance;
  }

  onSlideChange() {
    this.isLastSlide = this.swiperRef?.nativeElement.swiper.isEnd || false;
    console.log(this.isLastSlide)
  }

  willChange() {
    console.log('here')
  }


  nextPage() {
    localStorage.setItem('onboardingCompleted', 'true');
    this.router.navigate(['login']);

    // this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

}
