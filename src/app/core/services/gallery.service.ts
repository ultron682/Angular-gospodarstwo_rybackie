import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from '../http/api.endpoints';


@Injectable({
    providedIn: 'root'
})
export class GalleryService {
   constructor(private http: HttpClient) { }

   handleGetHeaderPhotos() {
    return this.http.get(apiEndpoints.gallery.getHeaderPhotos, {responseType: 'text'});
  }
}
