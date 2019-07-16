import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
//import { NamePipe } from '../shared/pipes/name.pipe';
//import {BlogService} from '../services/blog.service';

@NgModule({
  declarations: [BlogComponent, DetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
      HttpClientModule,
      SharedModule
  ]
})
export class BlogModule { }
