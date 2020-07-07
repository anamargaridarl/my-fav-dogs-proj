import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { DashInfoComponent } from './components/dash-info/dash-info.component';
import { DashCreateComponent } from './components/dash-create/dash-create.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    DashInfoComponent,
    DashCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
