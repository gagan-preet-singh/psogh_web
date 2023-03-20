import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from 'ng-gallery';

interface img_meta {
  img: string,
  alt: string,
  text: string
}

@Component({
  selector: 'psh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  galleryId = 'homeGallery';
  playInterval = 5000;
  autoPlay = true;
  thumb = false;
  play = true;
  pause = false;

  constructor(private _gallery: Gallery) {
    console.log(this._gallery);
  }

  ngOnInit(): void {
    const galleryRef: GalleryRef = this._gallery.ref(this.galleryId);
    // galleryRef.addImage({
    //   src: 'https://drive.google.com/uc?id=' + image_id,
    //   thumb: 'https://drive.google.com/uc?id=' + image_id
    // });
    // galleryRef.addImage({
    //   src: 'assets/img/home_banner.jpg',
    //   thumb: 'assets/img/home_banner.jpg',
    //   title: 'Uniting Punjabis, Strengthening Communities'
    // });
    // galleryRef.addImage({
    //   src: 'assets/img/home_banner.jpg',
    //   thumb: 'assets/img/home_banner.jpg',
    //   title: 'Preserving Our Heritage, Building Our Future'
    // });
    // galleryRef.addImage({
    //   src: 'assets/img/home_banner.jpg',
    //   thumb: 'assets/img/home_banner.jpg',
    //   title: 'Celebrating Culture, Empowering People'
    // });
    // galleryRef.addImage({
    //   src: 'assets/img/home_banner.jpg',
    //   thumb: 'assets/img/home_banner.jpg',
    //   title: 'From Punjab to Houston, Together We Thrive'
    // });
    // galleryRef.addImage({
    //   src: 'assets/img/home_banner.jpg',
    //   thumb: 'assets/img/home_banner.jpg',
    //   title: 'Bridging Cultures, Building Bonds'
    // });
    // galleryRef.addImage({
    //   src: 'assets/img/home_banner.jpg',
    //   thumb: 'assets/img/home_banner.jpg',
    //   title: 'One Community, One Voice, One Vision'
    // });
    galleryRef.addVideo({
      src: [{ url: 'https://drive.google.com/uc?id=1DJuyI-uqzj3di1RvlL4bE0wV8T81_EYf', type: 'video/mp4' }] as any,
      disablePictureInPicture: true,
      controls: false,
      autoplay: true,
    })

  }

}
