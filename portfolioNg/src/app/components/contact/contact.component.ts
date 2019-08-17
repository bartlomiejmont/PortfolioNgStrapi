import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article'
import { ArticlesService } from 'src/app/services/articles.service';
import * as marked from 'marked';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  article:Article[] = [{
    id: 0,
    name: '',
    content: '',
    created_at: '',
    updated_at: '',
  }];

  constructor(private articleService:ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticle('?name=contact').subscribe( article => {
      this.article = article;
    });
  }

}
