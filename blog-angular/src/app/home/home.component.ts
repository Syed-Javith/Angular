import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  blogs : any[] = [];

  user ;

  constructor( private blogService : BlogService , private Modal : NgbModal , private cookies : CookieService){

    const cookie = this.cookies.get('user')
    this.user =  cookie ? cookie : "" ;

    this.blogService.getBlogs()
    .subscribe((blogs)=>{
      console.log(blogs);
      this.blogs = blogs
    });
  }

  public open(modal: any): void {
    this.Modal.open(modal);
  }

  addBlog(form : NgForm){
    console.log(form);  
  }

  logout(){
    this.cookies.delete('user','/')
  }

}
