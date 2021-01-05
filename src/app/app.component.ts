import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private toastMessage = '';
  constructor(
    private service: TranslocoService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.getTranslation();
  }

  private getTranslation() {
    this.service.selectTranslate('toast').subscribe((value) => {
      console.log(value);
      return (this.toastMessage = value);
    });
  }

  change(lang: string) {
    this.service.setActiveLang(lang);
    this.getTranslation();
    this.toastr.success(this.toastMessage);
  }
}
