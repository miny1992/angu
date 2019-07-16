import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { NamePipe } from '../shared/pipe/name.pipe';
//import { DirectiveWithInputDirective } from '../shared/directives/directive-with-input.directive';

const Url = 'assets/img';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   
  blogList;
  myColor="beige";
  readonly imageUrl = Url;
  constructor(private blogService: BlogService) { }
   
  ngOnInit() {
      this.getBlogData();
  }

    getBlogData(){
        this.blogService.getBlogList().subscribe(
            (data: any[]) =>{
//                data.forEach((obj)=>{obj.date=new Date(obj.date)});
//               this.blogList = data;
//                return this.blogList;
                console.log(data);
            } 
        );
    }
}
