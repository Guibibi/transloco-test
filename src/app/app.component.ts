import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private service: TranslocoService) {}

  ngOnInit() {}
  title = 'transloco';

  change(lang: string) {
    this.service.setActiveLang(lang);
  }
}
