import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sim, SimCard } from '@jonz94/capacitor-sim';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  sims: SimCard[] = [];
  constructor(public router: Router) {}

  ngOnInit() {
    this.getUserPhoneNumber();
  }

  async getUserPhoneNumber() {
    const res = await Sim.checkPermissions();
    console.log(res);

    const sims = await Sim.getSimCards();
    console.log(sims);
    this.sims = sims.simCards;
  }

  redirect(paramID: any) {
    this.router.navigate(['redirects-list']);
  }
}
