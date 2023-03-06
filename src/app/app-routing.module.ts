import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './body/about/activities/activities.component';
import { BlogsComponent } from './body/about/blogs/blogs.component';
import { ByLawsComponent } from './body/about/by-laws/by-laws.component';
import { HistoryComponent } from './body/about/history/history.component';
import { MissionComponent } from './body/about/mission/mission.component';
import { ContactComponent } from './body/contact/contact.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { HomeComponent } from './body/home/home.component';
import { BoothComponent } from './body/involve/booth/booth.component';
import { EventsComponent } from './body/involve/events/events.component';
import { MemberComponent } from './body/involve/member/member.component';
import { SponsorshipComponent } from './body/involve/sponsorship/sponsorship.component';
import { VolunteerComponent } from './body/involve/volunteer/volunteer.component';
import { LeadershipComponent } from './body/leadership/leadership.component';

const routes: Routes = [
  // {path: 'home', component: HomeComponent},

  {path: 'about/mission', component: MissionComponent},
  {path: 'about/activities', component: ActivitiesComponent},
  {path: 'about/history', component: HistoryComponent},
  {path: 'about/blogs', component: BlogsComponent},
  {path: 'about/by_laws', component: ByLawsComponent},
  {path: 'about', redirectTo: 'about/mission'},

  {path: 'leadership', component: LeadershipComponent},

  {path: 'involve/volunteer', component: VolunteerComponent},
  {path: 'involve/events', component: EventsComponent},
  {path: 'involve/booth', component: BoothComponent},
  {path: 'involve/sponsorship', component: SponsorshipComponent},
  {path: 'involve/sponsor', redirectTo: 'involve/sponsorship'},
  {path: 'involve/member', component: MemberComponent},
  {path: 'involve', redirectTo: 'involve/volunteer'},

  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},

  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
