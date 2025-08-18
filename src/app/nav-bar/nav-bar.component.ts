import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare var window: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('createAccountModal') createAccountModal!: ElementRef;

  openCreateAccountModal(event: Event) {
  event.preventDefault();
  const modalEl = document.getElementById('createAccountModal');
  if (modalEl) {
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();
  }
  }

}
