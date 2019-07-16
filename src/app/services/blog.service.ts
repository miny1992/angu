import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { BlogModule } from '../blog/blog.module';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
    
  getBlogList(){
     return this.http.get('http://localhost:8000/api/cats');
  }
}
