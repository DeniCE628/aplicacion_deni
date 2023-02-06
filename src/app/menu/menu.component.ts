import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rutas=[
    {
      name:'Home',
      path: '/home'
    },
    {
      name:'Gallery',
      path: '/gallery'
    },
    {
      name:'About',
      path: '/about'
    },
    {
      name:'Contact',
      path: '/contact'
    },

  ]
}
