import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GlobalData} from '../../global-data';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isLoading = false;
  listBlog = [];
  isListShown = false;
  constructor(private _Activatedroute:ActivatedRoute, private _router:Router)
{}

  ngOnInit() {
    this._Activatedroute.params.subscribe(params => {
      let id = params['showBlogs'];
      
    
      console.log(`${id}`);
      if(id === 'showBlogs'){
        this.isListShown = true;
      }else
      this.isListShown = false;
      });
      this.listBlog = GlobalData.DataPost;
      console.log(GlobalData.DataPost);
      console.log(this.listBlog);
  }

  addForm(formdata) {
    this.isLoading = true;
    const formArray = JSON.parse(JSON.stringify(formdata.value));
    console.log(formArray);
    GlobalData.DataPost.push(formArray);
    
    this.isLoading = false;
    console.log('array after push',GlobalData.DataPost);
    
  }

  
}

