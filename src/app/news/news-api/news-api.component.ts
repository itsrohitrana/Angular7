import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../service/news-api.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.sass']
})
export class NewsApiComponent implements OnInit {

  mArticles = [];
  mSources = [];

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe((data : any)=> {
        data.articles.forEach(element => {
          this.mArticles.push(element);
        });
      });
    //load news sources
    this.newsapi.initSources().subscribe((data : any)=> {
      data.sources.forEach(element => {
        this.mSources.push(element);
      });
    });  

    console.log('as',this.mSources);
    console.log(this.mArticles);
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe((data : any)=> {
      data.sources.forEach(element => {
        this.mSources.push(element);
      });
    });
  }


}
