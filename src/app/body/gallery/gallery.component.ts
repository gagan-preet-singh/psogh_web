import { Component, OnInit, ViewChild } from '@angular/core';
import { Gallery, GalleryItem, GalleryRef } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'psh-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryPageComponent implements OnInit {
  galleryId = 'mainGallery';
  galleryId2 = 'mainGalleryDisplay';
  gallery_images: GalleryItem[] = [];
  nav: boolean = false;
  counter: boolean = false;

  constructor(private _gallery: Gallery, private _lightbox: Lightbox) { }

  ngOnInit(): void {
    const galleryRef: GalleryRef = this._gallery.ref(this.galleryId);
    const galleryRef2: GalleryRef = this._gallery.ref(this.galleryId2);

    var images = [
      '0B-D3UtBBXDUGLWR0S09XSEZzS0E', '0B-D3UtBBXDUGLXlNR3pGNDZjNkU', '0B-D3UtBBXDUGM01Qa2d6aS15RVE',
      '0B-D3UtBBXDUGM0hXa1NtU0hVQmc', '0B-D3UtBBXDUGM19zSEpSQzBXZjg', '0B-D3UtBBXDUGM1ZVcFpIZnJ0bFk',
      '0B-D3UtBBXDUGM1hDdW5YaDFBRnM', '0B-D3UtBBXDUGM2ZxYVNNS1RtNk0', '0B-D3UtBBXDUGM3VjY09BRlJicW8',
      // '0B-D3UtBBXDUGMEtWU1IzVnVBSWc', '0B-D3UtBBXDUGMHYxZmduTENpM3M', '0B-D3UtBBXDUGMU95c213YmUtUzg',
      // '0B-D3UtBBXDUGMVFvRmRiNnQzQlU', '0B-D3UtBBXDUGMkVadXVpSTBqVms', '0B-D3UtBBXDUGMlhCeXJpNTFCTlk',
      // '0B-D3UtBBXDUGMmNBQlcwZzZsaHM', '0B-D3UtBBXDUGN2o5bzRENWFrQzA', '0B-D3UtBBXDUGNENpTnk3MEkxaWs',
      // '0B-D3UtBBXDUGNFpTbWdwS3M4UzQ', '0B-D3UtBBXDUGNS01M1ZHbmhSazA', '0B-D3UtBBXDUGNTVOakxJQVVMYTg',
      // '0B-D3UtBBXDUGNUVBSGlyS3VuYUU', '0B-D3UtBBXDUGNktOWXJDS1E2R1U', '0B-D3UtBBXDUGNmZTbkhBRjJjSjQ',
      // '0B-D3UtBBXDUGNnFXbG00Z0Y1OGM', '0B-D3UtBBXDUGNndiX0hoMDZWaTg', '0B-D3UtBBXDUGNnk3TWYxSTVKdUE',
      // '0B-D3UtBBXDUGODNoaXdDN1N3T3M', '0B-D3UtBBXDUGOGppbUdYZDJyN0U', '0B-D3UtBBXDUGOGt6M3A4WV9RbTg',
      // '0B-D3UtBBXDUGOTlPUWxsc25oWDA', '0B-D3UtBBXDUGOXdFOWp1Mk1Hclk', '0B-D3UtBBXDUGOXdrVXZHdFphUms',
      // '0B-D3UtBBXDUGQVVYNEZqYkYxXzQ', '0B-D3UtBBXDUGQWY4QmswQ0JGQjA', '0B-D3UtBBXDUGQXEyOVdSVDBYWGs',
      // '0B-D3UtBBXDUGQjZSdzF0UXc2YjQ', '0B-D3UtBBXDUGQkdPS3JpYXcxR2c', '0B-D3UtBBXDUGQkxRaVJVTFVQVms',
      // '0B-D3UtBBXDUGR0hoU3NDUkxfZzQ', '0B-D3UtBBXDUGR1FuMEFPZGp3Zlk', '0B-D3UtBBXDUGR1RJTEhZNkxyaDQ',
      // '0B-D3UtBBXDUGR2hzSFJxa1J5elE', '0B-D3UtBBXDUGRFBzRzVyaFhfM0E', '0B-D3UtBBXDUGRHEzSk43Z1VZTzQ',
      // '0B-D3UtBBXDUGRHVGdjZDSTZSOEU', '0B-D3UtBBXDUGRXRLWDMwdmhWcDQ', '0B-D3UtBBXDUGRXpVQVF1RE5FWUE',
      // '0B-D3UtBBXDUGRlViTUpnd3pMQXM', '0B-D3UtBBXDUGS1FiQ0NqV1hkNEk', '0B-D3UtBBXDUGS2NHTzlRbmJRVGc',
      // '0B-D3UtBBXDUGSE1fYklNSHlJMlk', '0B-D3UtBBXDUGSEtsVXZRckFjMDQ', '0B-D3UtBBXDUGSHJLVkFLc1lvVmM',
      // '0B-D3UtBBXDUGSHhBOHlweE1BVE0', '0B-D3UtBBXDUGSTJNMWtUS1ZjYnc', '0B-D3UtBBXDUGSUhybzk3QUlYRzQ',
      // '0B-D3UtBBXDUGSWw3OVFfV0oybWM', '0B-D3UtBBXDUGSlBnYmJQXzJ5Rnc', '0B-D3UtBBXDUGSmVpdklyeFNvcjQ',
      // '0B-D3UtBBXDUGSmlQdlVjcnNGajQ', '0B-D3UtBBXDUGSnpZODJZYmMwZGs', '0B-D3UtBBXDUGT1E1UFFTcEJ3M1U',
      '0B-D3UtBBXDUGTE1zZDBZMC1EcW8', '0B-D3UtBBXDUGTEpXbFNnZ0FCWTQ', '0B-D3UtBBXDUGTFRib1V2S3hieFU',
      // '0B-D3UtBBXDUGTFpKT09qUGhIREU', '0B-D3UtBBXDUGTHRiUl8tczh2ak0', '0B-D3UtBBXDUGTU9NekhlemdjVms',
      // '0B-D3UtBBXDUGTU9mbUt3M0o4S2s', '0B-D3UtBBXDUGTVQ1V01XWkxoV1U', '0B-D3UtBBXDUGTW80WTI0VDBLdWs',
      // '0B-D3UtBBXDUGTzE1R2tuNzR3Mkk', '0B-D3UtBBXDUGU2pKal9valZORW8', '0B-D3UtBBXDUGU3VuRVVSektIMWc',
      // '0B-D3UtBBXDUGU3dhWktGVlVfc1U', '0B-D3UtBBXDUGUERVVHMySUUySFE', '0B-D3UtBBXDUGUFRISGFlZHZfeFk',
      // '0B-D3UtBBXDUGUFUxVzVXSWpxaGc', '0B-D3UtBBXDUGUFlxcE5DdlFaVEE', '0B-D3UtBBXDUGUHczVFBmdDBVTTQ',
      // '0B-D3UtBBXDUGUS1jY2FmLS1pMms', '0B-D3UtBBXDUGUUJwZUpidU9ybTg', '0B-D3UtBBXDUGUV9UNXJwUVN0ZEk',
      // '0B-D3UtBBXDUGUlN2SGRYY3dPSVE', '0B-D3UtBBXDUGUlpyX0wzbDR1X1k', '0B-D3UtBBXDUGUmlJT1h5dDBHYU0',
      // '0B-D3UtBBXDUGV05aT29Sd0hCRkE', '0B-D3UtBBXDUGV1hGNzlxVTBnRUU', '0B-D3UtBBXDUGV245Z19ac2VoeGc',
      // '0B-D3UtBBXDUGV3VXQ1lhRWpzbVU', '0B-D3UtBBXDUGVF9RajlyQzdhNlU', '0B-D3UtBBXDUGVFRHTTJJN2ZSTTg',
      // '0B-D3UtBBXDUGVG9oQWJDOEZJbDA', '0B-D3UtBBXDUGVGxPMXJjNjV4QUE', '0B-D3UtBBXDUGVHA3S2E2WTAtUU0',
      // '0B-D3UtBBXDUGVHF0Q2Z4bzM3ams', '0B-D3UtBBXDUGVVZFLTdnY05qU28', '0B-D3UtBBXDUGVW9mUHhNbFlsNms',
      // '0B-D3UtBBXDUGVjF6dEgzZkZqa2M', '0B-D3UtBBXDUGVklIM0NQRmtFMzg', '0B-D3UtBBXDUGVkxZVWN6MVJsaEU',
      // '0B-D3UtBBXDUGVlBsMERlUlFNakU', '0B-D3UtBBXDUGVmRhalBZcjU5NHM', '0B-D3UtBBXDUGVmY5bFc5Y2d5aG8',
      // '0B-D3UtBBXDUGVnFocEVBM05reG8', '0B-D3UtBBXDUGVzBLc1hRbjYzLTg', '0B-D3UtBBXDUGWE00clNWYzlqOWc',
      // '0B-D3UtBBXDUGWEpvelMxRWR3VWM', '0B-D3UtBBXDUGWGRMdXBudjBsWlE', '0B-D3UtBBXDUGWGctYnhCNWVHNUk',
      // '0B-D3UtBBXDUGWGthZUM4YVk0WVk', '0B-D3UtBBXDUGWHhIMHBib2FBUWM', '0B-D3UtBBXDUGWUhkMjg4bGlzeUk',
      // '0B-D3UtBBXDUGWWVsNHZ6LW5lVVE', '0B-D3UtBBXDUGWWxsbWpfNGZ1REU', '0B-D3UtBBXDUGWXcwSkliREllcFE',
      // '0B-D3UtBBXDUGWXhfR0I1QWYzN3c', '0B-D3UtBBXDUGWkJROEtXY214S3M', '0B-D3UtBBXDUGWkVqZzU5amF0M2s',
      // '0B-D3UtBBXDUGWmMzMlJyWGN6eEk', '0B-D3UtBBXDUGX0ZnNU5TMlE5OE0', '0B-D3UtBBXDUGX0pBZTNhbHlpb2s',
      // '0B-D3UtBBXDUGX2lSb0U3Y2R3UGc', '0B-D3UtBBXDUGXzQyX2lLN1J1SGM', '0B-D3UtBBXDUGY0RiWS1jYVlsMm8',
      // '0B-D3UtBBXDUGY0VZbUQyRkpackk', '0B-D3UtBBXDUGY0xZcHFweDNYdkE', '0B-D3UtBBXDUGY1lxLW5HdngyU00',
      // '0B-D3UtBBXDUGY21EenhOSTJHc00', '0B-D3UtBBXDUGY24xNldhaXM5cXc', '0B-D3UtBBXDUGY2JiUnhSWkFfd3c',
      // '0B-D3UtBBXDUGYTlnakI2THA0UWs', '0B-D3UtBBXDUGYUVMeFZKZXJDMkE', '0B-D3UtBBXDUGYUxFV241OWxNUEU',
      // '0B-D3UtBBXDUGYW0tYnZJck5oMU0', '0B-D3UtBBXDUGYk9iWl9vSHA1QWs', '0B-D3UtBBXDUGYkNkWHRHZW1LRGM',
      // '0B-D3UtBBXDUGYklDUjFfampWcWs', '0B-D3UtBBXDUGYmtJZW9FSEEwcG8', '0B-D3UtBBXDUGYnY1c0t1a0s0SVU',
      // '0B-D3UtBBXDUGZ0laS3Fpa1EzNUk', '0B-D3UtBBXDUGZ0wtSFR4X3ZoWms', '0B-D3UtBBXDUGZ0xDZE5Rblk0Y00',
      // '0B-D3UtBBXDUGZ1JzVzZzNUZfSnc', '0B-D3UtBBXDUGZ1lVUWpWZUY4T00', '0B-D3UtBBXDUGZEZ6a2ZUYVl2a00',
      // '0B-D3UtBBXDUGZElEeUw1c2pUdHM', '0B-D3UtBBXDUGZTBYaUk2TWZhTjA', '0B-D3UtBBXDUGZTdoR25uZ3lpa2M',
      // '0B-D3UtBBXDUGZURPMGNWSHNMUjA', '0B-D3UtBBXDUGZXduNnZwcTVhVzA', '0B-D3UtBBXDUGZjNlUUpvTGN4Tnc',
      // '0B-D3UtBBXDUGZkY1bEtoX3g1VTg', '0B-D3UtBBXDUGZl9waHd6aWlMWk0', '0B-D3UtBBXDUGa2g1WjFVcHpBMzg',
      // '0B-D3UtBBXDUGaDNNb3BER2s4bmc', '0B-D3UtBBXDUGaUV5NEdlZ0RUWTQ', '0B-D3UtBBXDUGaW9wM0J6X19qZDA',
      // '0B-D3UtBBXDUGaXctblJ0Sk05VGs', '0B-D3UtBBXDUGajJ4c3ZmME1pOTg', '0B-D3UtBBXDUGak1pdzgxWTVUUEE',
      // '0B-D3UtBBXDUGakZhVmxsT05HcTQ', '0B-D3UtBBXDUGakxkaUZoSnlsRmc', '0B-D3UtBBXDUGam9Wc0hwODFxZDg',
      // '0B-D3UtBBXDUGamtqWDczV2lIWVE', '0B-D3UtBBXDUGanBydHVsWUMtaWc', '0B-D3UtBBXDUGanhycEk1OW9WY1U',
      // '0B-D3UtBBXDUGb0E5V2FjUS04cU0', '0B-D3UtBBXDUGb19fNUZEbFRNWXc', '0B-D3UtBBXDUGb2RqLU02dm1McVE',
      // '0B-D3UtBBXDUGb2labDA5YTNuemM', '0B-D3UtBBXDUGb3RFV0RvRU45SWs', '0B-D3UtBBXDUGbERGMDNyRnpZVHM',
      // '0B-D3UtBBXDUGbFdrQ3RtN0c2d0E', '0B-D3UtBBXDUGbG1Fcjh0MXh4LXM', '0B-D3UtBBXDUGbU0wR283U05pcU0',
      // '0B-D3UtBBXDUGbWVzejZGSXBxSVk', '0B-D3UtBBXDUGbXhjaWREUTBwMGM', '0B-D3UtBBXDUGbjBZYmxuTDZKVW8',
      // '0B-D3UtBBXDUGbjcySWhLTG5yTm8', '0B-D3UtBBXDUGbjdlNkhqU1BmV0k', '0B-D3UtBBXDUGbk5jT1lmRTduQ2c',
      // '0B-D3UtBBXDUGblN3VzcxN0VOOGs', '0B-D3UtBBXDUGblNOdGpFS0RETXM', '0B-D3UtBBXDUGbmdrMDlTVTVKOVE',
      // '0B-D3UtBBXDUGc05GSGFmVVlFZ1E', '0B-D3UtBBXDUGc1N2blYwb0c4QzQ', '0B-D3UtBBXDUGc1RaRmpENjdEa0E',
      // '0B-D3UtBBXDUGc1l4Q1BqaTBaaWs', '0B-D3UtBBXDUGc2FTR1RPbzRQNEE', '0B-D3UtBBXDUGc2hTemg3QTBVNU0',
      // '0B-D3UtBBXDUGc3FHaUcyeEFvWnM', '0B-D3UtBBXDUGc3I5dmxYMlF1WUk', '0B-D3UtBBXDUGcDg3b3ZmblptY1U',
      // '0B-D3UtBBXDUGcDhHalhwWmFaa2s', '0B-D3UtBBXDUGcFhKZXdoN08wVVU', '0B-D3UtBBXDUGcGRyOHh3NFRGN1k',
      // '0B-D3UtBBXDUGcTdnbGVjUVVMWDA', '0B-D3UtBBXDUGcU5DYUx6YW9xVGs', '0B-D3UtBBXDUGcWF2T1k0dmtrRXc',
      // '0B-D3UtBBXDUGcklzX0xfZTdUZVU', '0B-D3UtBBXDUGcm53bDVNSjdHMUU', '0B-D3UtBBXDUGczRJVGcyUkdrVW8',
      // '0B-D3UtBBXDUGczdJdnU0eERCOEE', '0B-D3UtBBXDUGd1B4TUlQNXFZZW8', '0B-D3UtBBXDUGd2JFWkk0Z2ZlN3M',
      // '0B-D3UtBBXDUGd3UtaDVzcGlmMVE', '0B-D3UtBBXDUGd3lCYXNQZ3I0bzg', '0B-D3UtBBXDUGdEU0dEJTVXVUWjQ',
      // '0B-D3UtBBXDUGdExYcFNKelpvb1U', '0B-D3UtBBXDUGdFJReWRzbm9ZbjA', '0B-D3UtBBXDUGdHF2djZTODZoYUU',
      // '0B-D3UtBBXDUGdHVONlJGbmdaTmM', '0B-D3UtBBXDUGdWEybXJmUUFTb1U', '0B-D3UtBBXDUGdWNuQ3NfZVZNUFU',
      // '0B-D3UtBBXDUGdWNzQ25lUkNZYms', '0B-D3UtBBXDUGdWdzU09RR0V3S1U', '0B-D3UtBBXDUGdWtmV0UzV2RVMzg',
      // '0B-D3UtBBXDUGdjNmUE1KYUM2WWs', '0B-D3UtBBXDUGdlMxQndLc1hCR1E', '0B-D3UtBBXDUGdlZjQnNZZ1NMT28',
      // '0B-D3UtBBXDUGdmRrUTJZaTBOSGc', '0B-D3UtBBXDUGdnM4UExwSTdzWUk', '0B-D3UtBBXDUGdng0RU55ZlIyTEk',
      // '0B-D3UtBBXDUGdzM5bTZRNEZ4U28', '0B-D3UtBBXDUGdzZJTzZTZUdvM2s', '0B-D3UtBBXDUGeDA0YW5DZE1qdnc',
      // '0B-D3UtBBXDUGeDVyRnM0SXNVS0k', '0B-D3UtBBXDUGeEVNaDd2eWxhSlE', '0B-D3UtBBXDUGeEcxSU00U2Z3Ujg',
      // '0B-D3UtBBXDUGeEd6cDEyTXo1T0U', '0B-D3UtBBXDUGeEhiUGF6cEM4eE0', '0B-D3UtBBXDUGeGJEWGxUX1htXzQ',
      // '0B-D3UtBBXDUGeGx3SXVVeWtmWWM', '0B-D3UtBBXDUGeTVsdUZQSGxZbDA', '0B-D3UtBBXDUGeVFNVFBSWUhvRGc',
      // '0B-D3UtBBXDUGeVFRVEZ4OXU4XzQ', '0B-D3UtBBXDUGeVo3Rjc4YlotQ00', '0B-D3UtBBXDUGeWZEeS1kQlJneFE',
      // '0B-D3UtBBXDUGeXFtc3BlYTNSSmM', '0B-D3UtBBXDUGekFOYnNGMkRSb1U', '0B-D3UtBBXDUGelBKaFNmXzB2OWM',
      // '0B-D3UtBBXDUGelYyMHowVWdMYkk', '0B-D3UtBBXDUGemIweUtKenNvYUU', '0B-D3UtBBXDUGemRUUVhiUjdIZ3M',
      // '0B-D3UtBBXDUGemRaTDlpYUVoZEk', '0B-D3UtBBXDUGemk5ZS1qTktFNUk', '0B-D3UtBBXDUGenVFWFJvV2ZJdmM'
    ];

    for (let _i = 0; _i < images.length; _i++) {
      const image_id = images[_i];
      galleryRef.addImage({
        // src: "https://drive.google.com/thumbnail?sz=w1000&id="+image_id,
        src: 'https://drive.google.com/uc?id=' + image_id,
        // thumb: "https://drive.google.com/thumbnail?sz=w200&id="+image_id
        thumb: 'https://drive.google.com/uc?id=' + image_id
      });
      galleryRef2.addImage({
        // src: "https://drive.google.com/thumbnail?sz=w1000&id="+image_id,
        src: 'https://drive.google.com/uc?id=' + image_id,
        // thumb: "https://drive.google.com/thumbnail?sz=w200&id="+image_id
        thumb: 'https://drive.google.com/uc?id=' + image_id
      });
      this.gallery_images[_i] = {
        data: {
          // src: "https://drive.google.com/thumbnail?sz=w1000&id="+image_id,
          src: 'https://drive.google.com/uc?id=' + image_id,
          // thumb: "https://drive.google.com/thumbnail?sz=w200&id="+image_id
          thumb: 'https://drive.google.com/uc?id=' + image_id
        },
        type: 'images'
      }
    }

    galleryRef2.load(this.gallery_images);
    console.log(this.gallery_images);
  }

  openInFullScreen(index: number) {
    this._lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen'
    });
  }
}
