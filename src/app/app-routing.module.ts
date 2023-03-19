import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './body/about/activities/activities.component';
import { BlogsComponent } from './body/about/blogs/blogs.component';
import { ByLawsComponent } from './body/about/by-laws/by-laws.component';
import { HistoryComponent } from './body/about/history/history.component';
import { MissionComponent } from './body/about/mission/mission.component';
import { ContactComponent } from './body/contact/contact.component';
import { GalleryPageComponent } from './body/gallery/gallery.component';
import { HomeComponent } from './body/home/home.component';
import { BoothComponent } from './body/involve/booth/booth.component';
import { EventsComponent } from './body/involve/events/events.component';
import { MemberComponent } from './body/involve/member/member.component';
import { SponsorshipComponent } from './body/involve/sponsorship/sponsorship.component';
import { VolunteerComponent } from './body/involve/volunteer/volunteer.component';
import { LeadershipComponent } from './body/leadership/leadership.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: 'about', component: MissionComponent, children: [
    {path: '', redirectTo: 'about/mission', pathMatch: 'full'},
    // {path: 'mission', component: MissionComponent},
    // {path: 'activities', component: ActivitiesComponent},
    // {path: 'history', component: HistoryComponent},
    // {path: 'blogs', component: BlogsComponent},
    // {path: 'by_laws', component: ByLawsComponent},
    {path: '**', redirectTo: ''}
  ]},

  {path: 'leadership', component: LeadershipComponent},

  // {path: 'involve', component: VolunteerComponent, children: [
  //   {path: 'volunteer', component: VolunteerComponent},
  //   {path: 'events', component: EventsComponent},
  //   {path: 'booth', component: BoothComponent},
  //   {path: 'sponsorship', component: SponsorshipComponent},
  //   {path: 'sponsor', redirectTo: 'involve/sponsorship'},
  //   // {path: 'involve/member', component: MemberComponent},
  //   // {path: '', redirectTo: 'involve/volunteer', pathMatch: 'full'},
  //   // {path: '**', redirectTo: ''}
  // ]},

  {path: 'involve/volunteer', component: VolunteerComponent},
  {path: 'involve/events', component: EventsComponent},
  {path: 'involve/booth', component: BoothComponent},
  {path: 'involve/sponsorship', component: SponsorshipComponent},
  {path: 'involve/sponsor', redirectTo: 'involve/sponsorship'},
  // {path: 'involve/member', component: MemberComponent},
  {path: 'involve', redirectTo: 'involve/volunteer'},

  {path: 'gallery', component: GalleryPageComponent},
  {path: 'contact', component: ContactComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
