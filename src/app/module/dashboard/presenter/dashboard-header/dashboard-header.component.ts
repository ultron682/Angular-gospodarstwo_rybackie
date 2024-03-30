import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit, OnDestroy {

  slideIndex = 0;
  subscription: Subscription;
  photoLinks = [];
  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.showSlide(this.slideIndex);
    this.getFishHeaderPhotos();
    const source = interval(5000);
    this.subscription = source.subscribe(val => this.showSlide(this.getNext()));
  }

  getFishHeaderPhotos() {
    this.galleryService.handleGetHeaderPhotos().subscribe(response => {
      const obj = JSON.parse(response);
      let index = 0;
      obj.forEach(row => {
        this.photoLinks.push({photoLink: row, slideIndex: index});
        index++;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showSlide(n: number): void {
    this.slideIndex = n;
  }

  onClickDotSlide(n: number): void {
    this.slideIndex = n;
    this.subscription.unsubscribe();
  }

  getNext(): number {
    if (this.slideIndex >= 2) {
      return 0;
    } else {
      return this.slideIndex + 1;
    }
  }
}
