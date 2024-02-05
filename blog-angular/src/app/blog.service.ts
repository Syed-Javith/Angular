import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url : string = 'http://localhost:5000/blog';

  constructor(private http : HttpClient) { }

  getBlogs() : Observable<any> {
    return this.http.get(this.url )
  }

  addBlog(userid : string , title : string , data : any) : Observable<any>{
    return this.http.post(`${this.url}/${userid}/${title}` , data)
  }

  updateBlog(userid : string , title : string , data : any) : Observable<any>{
    return this.http.patch( `${this.url}/${userid}/${title}`  , data);
  }

  deleteBlog(userid : string , title : string ) : Observable<any>{
    return this.http.delete( `${this.url}/${userid}/${title}` );
  }
}
