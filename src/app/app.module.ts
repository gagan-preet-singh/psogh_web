import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
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
import { GalleryComponent } from './body/gallery/gallery.component';
import { ContactComponent } from './body/contact/contact.component';

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
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
