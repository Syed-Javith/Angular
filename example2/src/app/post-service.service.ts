import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  post = [ {
    name : "post1",
    id : "a103"
  } , {
    name : "post2",
    id : "b567"
  } , 
{
  name : "post3",
  id : "c908"
}]

  constructor() { }
}
