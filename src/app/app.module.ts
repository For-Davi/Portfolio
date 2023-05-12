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


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    UserBlueWhiteComponent,
    TitleSectionComponent,
    SkillsComponent,
    DashboardComponent,
    ProjectsComponent
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
