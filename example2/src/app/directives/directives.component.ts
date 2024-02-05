import { Component, ViewChild } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  role = 'ggg'
  // listOfPosts : any[]  = [] ;
  
  // constructor(postservice : PostServiceService){
  //   this.listOfPosts = postservice.post;
  // }
  posts : string[] = [ "post1" , "post2" , "post3" , "post4" , "post5"]

  applycolor = true ;
  styles  = {
  color : "red",
  backgroundColor :  this.applycolor ? "yellow" : "blue",
  fontFamily : "'Courier New', Courier, monospace"
 }

// classes : string = 'class1 class2 class3';

// classList : string[] = ['class1' , this.applycolor ? 'class2' : '' , 'class3']

// classAsObject = {
//   class1 : this.applycolor,
//   class2 : (1 + 1 == 2) ,
//   class3 : true
// }

   
}



// styles  = {
//   color : "red",
//   backgroundColor :  "yellow",
//   fontFamily : "'Courier New', Courier, monospace"
//  }


// classes : string = 'class1 class2 class3';

// classList : string[] = ['class1' , 'class2' , 'class3']

// classAsObject = {
//   class1 : true,
//   class2 : (1 + 1 == 2) ,
//   class3 : true
// }

// role : string = "customer"

// isAdmin : boolean = false;

// posts : string[] = [ "post1" , "post2" , "post3" , "post4" , "post5"]