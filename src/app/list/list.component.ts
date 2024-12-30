import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
intervenants=[{
  nom:"khalil",prenom:"Lakhdhar",age:30,formation:"java",grade:"speaker"
},
{
  prenom:"mohamed",nom:"ben salah",age:25,formation:"angular",grade:"candidat"
},
{
  prenom:"ali",nom:"ben ahmed",age:35,formation:"spring",grade:"speaker"
},
{
  prenom:"mohamed",nom:"ben ali",age:30,formation:"nodejs",grade:"candidat"
},
{
  prenom:"Mohamed",nom:"Yaakoubi",age:35,formation:".net",grade:"speaker"
},
{
  prenom:"mohamed",nom:"ben ali",age:30,formation:"python",grade:"candidat"
},
{
  prenom:"ali",nom:"ben ahmed",age:35,formation:"php",grade:"speaker"
}
]
}
