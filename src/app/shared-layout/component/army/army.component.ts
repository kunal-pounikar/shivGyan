import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements AfterViewInit{
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      this.scrollToFragment(fragment);
    });
  }

  scrollToFragment(fragment: string | null) {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
