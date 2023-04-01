import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';
import { LightboxModule, LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { MissionComponent } from './body/about/mission/mission.component';
import { ActivitiesComponent } from './body/about/activities/activities.component';
import { HistoryComponent } from './body/about/history/history.component';
import { BlogsComponent } from './body/about/blogs/blogs.component';
import { ByLawsComponent } from './body/about/by-laws/by-laws.component';
import { LeadershipComponent } from './body/leadership/leadership.component';
import { VolunteerComponent } from './body/involve/volunteer/volunteer.component';
import { EventsComponent } from './body/involve/events/events.component';
import { BoothComponent } from './body/involve/booth/booth.component';
import { SponsorshipComponent } from './body/involve/sponsorship/sponsorship.component';
import { MemberComponent } from './body/involve/member/member.component';
import { GalleryPageComponent } from './body/gallery/gallery.component';
import { ContactComponent } from './body/contact/contact.component';
import { ContactService } from './body/contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    MissionComponent,
    ActivitiesComponent,
    HistoryComponent,
    BlogsComponent,
    ByLawsComponent,
    LeadershipComponent,
    VolunteerComponent,
    EventsComponent,
    BoothComponent,
    SponsorshipComponent,
    MemberComponent,
    GalleryPageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    GalleryModule,
    LightboxModule,
    // PdfViewerModule,
    // PdfJsViewerModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    },
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
