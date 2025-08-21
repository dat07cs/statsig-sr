import {Component, OnInit} from '@angular/core';
import {StatsigService} from '@statsig/angular-bindings';

@Component({
  selector: 'app-pets',
  imports: [],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent implements OnInit {

  constructor(
    private readonly statsigService: StatsigService,
  ) {

  }

  ngOnInit(): void {
    this.statsigService.updateUserAsync({userID: 'demo-statsig-sr'})
      .then(() => {
        console.log(`Statsig user updated successfully`);
      })
      .catch((error) => {
        console.error(`Error updating statsig user:`, error);
      });
    }

  onPetMe() {
    this.statsigService.logEvent("ClickedPetMe", 1, {
      "nonce": String(Math.random())
    });
  }
}
