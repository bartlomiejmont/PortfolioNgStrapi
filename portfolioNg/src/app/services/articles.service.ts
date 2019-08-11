import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/Article'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articleURL:string = 'http://localhost:1337/articles';

  constructor(private http:HttpClient) { }

  getArticle(title:string):Observable<Article[]> {

    return this.http.get<Article[]>(this.articleURL+title);

  }
}
