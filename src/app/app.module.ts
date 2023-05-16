import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserBlueWhiteComponent } from './pages/components/user-blue-white/user-blue-white.component';
import { TitleSectionComponent } from './shared/title-section/title-section.component';
import { SkillsComponent } from './pages/components/skills/skills.component';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/components/projects/projects.component';
import { HighlightsComponent } from './pages/components/highlights/highlights.component';
import { MoreProjectsComponent } from './pages/components/more-projects/more-projects.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { CertificationsComponent } from './pages/components/certifications/certifications.component';
import { ProjectAboutComponent } from './pages/components/project-about/project-about.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    UserBlueWhiteComponent,
    TitleSectionComponent,
    SkillsComponent,
    DashboardComponent,
    ProjectsComponent,
    HighlightsComponent,
    MoreProjectsComponent,
    FooterComponent,
    CertificationsComponent,
    ProjectAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
