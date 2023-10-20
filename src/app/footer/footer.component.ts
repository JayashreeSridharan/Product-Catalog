import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  getRole(){
    return localStorage.getItem("role")
  }
}
