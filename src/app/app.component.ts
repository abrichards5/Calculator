import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fact(Input)
  {
    let f=1;
    for(let i=2;i<=Input;i++)
    {
      f=f*i;
    }
    return f;
  }
}
