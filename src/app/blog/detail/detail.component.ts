import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BlogService } from '../../services/blog.service';

const Url = 'assets/img';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  blogDetail;
  imageUrl=Url;
  constructor(private route:ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
      this.getBlogDetail();
  }
  
  getBlogDetail(){
      let id = this.route.snapshot.paramMap.get('id');
       this.blogService.getBlogList().subscribe(
            (data: any[]) =>{ this.blogDetail = data.filter((obj)=>obj.id == id);console.log(this.blogDetail);return this.blogDetail} 
           );
}
}
