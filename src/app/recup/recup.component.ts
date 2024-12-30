import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recup',
  standalone: false,

  templateUrl: './recup.component.html',
  styleUrl: './recup.component.css'
})
export class RecupComponent {
  choix:string="";
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.choix=this.route.snapshot.params['formation'];
  }

}
