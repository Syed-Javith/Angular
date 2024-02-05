import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';

  handle(){
    alert(this.username)
  }
}


// title = 'example2';

// imageSource : String = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";

// username : string = 'hello user';

// isExample : boolean = true;

// handleClick() : void{
//   this.imageSource = "https://images.pexels.com/photos//pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=600"
// }