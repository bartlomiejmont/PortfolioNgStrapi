import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactComponent } from 'src/app/components/contact/contact.component'

const routes: Routes = [
  {
    path:'projects', component: ProjectsComponent,
  },
  {
    path:'', component: AboutComponent,
  },
  {
    path:'contact', component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
