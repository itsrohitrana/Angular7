import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsApiComponent } from './news/news-api/news-api.component';
import { BlogComponent } from './blog/blog.component';
import { AddComponent } from './blog/add/add.component';


const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'news', component: NewsApiComponent},
  { path: 'blogs', component: BlogComponent},
  { path: 'addBlog', component: AddComponent},
  { path: 'showBlog/:showBlogs', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
