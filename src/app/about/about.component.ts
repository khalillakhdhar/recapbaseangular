import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  visible=false;
  formations=["java","angular","spring","nodejs",".net","python","php"];
  constructor(private router: Router) { }
  goHome() {
    this.router.navigate(['../home']);
  }
  changeVisibility() {
    this.visible = !this.visible;
  }

}
