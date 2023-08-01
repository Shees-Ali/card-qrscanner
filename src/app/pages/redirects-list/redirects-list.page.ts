import { Component, OnInit } from '@angular/core';
import { Sim, SimCard } from '@jonz94/capacitor-sim';

@Component({
  selector: 'app-redirects-list',
  templateUrl: './redirects-list.page.html',
  styleUrls: ['./redirects-list.page.scss'],
})
export class RedirectsListPage implements OnInit {
  paramId: string = '';
  sims: SimCard[] = [];

  constructor() {}

  ngOnInit() {
    const string = localStorage.getItem('paramId');
    if (string) {
      this.paramId = string;
    }
    this.getUserPhoneNumber();
  }

  async getUserPhoneNumber() {
    const res = await Sim.checkPermissions();
    console.log(res);

    const sims = await Sim.getSimCards();
    console.log(sims);
    this.sims = sims.simCards;
  }

  redirectToRegistrar() {
    console.log(
      `http://nedapps.neduet.edu.pk:8080/qrapp/qrapp.jsp?param=${this.paramId}`
    );
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
