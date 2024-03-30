import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-dashboard-mini-gallery',
  templateUrl: './dashboard-mini-gallery.component.html',
  styleUrls: ['./dashboard-mini-gallery.component.scss']
})
export class DashboardMiniGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../../../../assets/img/gallery-3.jpg',
        medium: '../../../../../assets/img/gallery-3.jpg',
        big: '../../../../../assets/img/gallery-3.jpg'
      },
      {
        small: '../../../../../assets/img/gallery-4.jpg',
        medium: '../../../../../assets/img/gallery-4.jpg',
        big: '../../../../../assets/img/gallery-4.jpg'
      },
      {
        small: '../../../../../assets/img/gallery-5.jpg',
        medium: '../../../../../assets/img/gallery-5.jpg',
        big: '../../../../../assets/img/gallery-5.jpg'
      },
      {
        small: '../../../../../assets/img/gallery-6.jpg',
        medium: '../../../../../assets/img/gallery-6.jpg',
        big: '../../../../../assets/img/gallery-6.jpg'
      },
    ];
  }
}
