import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirects-list',
  templateUrl: './redirects-list.page.html',
  styleUrls: ['./redirects-list.page.scss'],
})
export class RedirectsListPage implements OnInit {
  paramId: string = '';
  constructor() {}

  ngOnInit() {
    const string = localStorage.getItem('paramId');
    console.log(string);
    if (string) {
      this.paramId = string;
    }
  }

  redirectToRegistrar() {
    console.log(`http://nedapps.neduet.edu.pk:8080/qrapp/qrapp.jsp?param=${this.paramId}`);
    window.open(
      `http://nedapps.neduet.edu.pk:8080/qrapp/qrapp.jsp?param=${this.paramId}`
    );
  }

  redirectToLibrary() {
    window.open(
      `http://nedapps.neduet.edu.pk:8080/qrapp/qrapp.jsp?param=${this.paramId}`
    );
  }
}
