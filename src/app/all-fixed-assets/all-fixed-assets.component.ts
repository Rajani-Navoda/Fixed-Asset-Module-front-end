import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-all-fixed-assets',
  templateUrl: './all-fixed-assets.component.html',
  styleUrls: ['./all-fixed-assets.component.css']
})
export class AllFixedAssetsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
