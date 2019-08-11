import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article'
import { ArticlesService } from 'src/app/services/articles.service';
import * as marked from 'marked';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  article:Article[] = [{
    id: 0,
    name: '',
    content: '',
    created_at: '',
    updated_at: '',
  }];

  constructor(private articleService:ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticle('?name=about').subscribe( article => {
      this.article = article;
    });
  }

}
