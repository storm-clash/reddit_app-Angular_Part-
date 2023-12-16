import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterEvent, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userLoginOn:boolean = false;

  ngOnInit(): void {
  }

}
