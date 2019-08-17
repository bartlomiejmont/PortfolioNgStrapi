import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { FlexModule } from '@angular/flex-layout';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgxImagesloadedModule } from 'ngx-imagesloaded';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule, MatListModule, MatIconModule } from "@angular/material";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { MarkedPipe } from './marked.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ContactComponent } from './components/contact/contact.component'


@NgModule({ 
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectCardComponent,
    ProjectsComponent,
    AboutComponent,
    MarkedPipe,
    ModalComponent,
    ContactComponent,

  ],
  entryComponents:[ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FlexModule,
    NgxMasonryModule,
    NgxImagesloadedModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule, MatListModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
