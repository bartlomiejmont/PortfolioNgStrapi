import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectsURL:string = 'http://localhost:1337/projects';

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsURL);
  }

}
