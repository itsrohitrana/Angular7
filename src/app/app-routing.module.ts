import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsApiComponent } from './news/news-api/news-api.component';


const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'news', component: NewsApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
