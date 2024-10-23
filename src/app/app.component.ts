import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslocoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'translocoDemo';
  currentLang: string = "";

  constructor(private translocoService: TranslocoService) {
    translocoService.langChanges$.subscribe(language => {
      this.currentLang = language;
      console.log('Current Language: ', this.currentLang);
    });
  }

  ngOnInit(): void {
    this.currentLang = this.translocoService.getActiveLang();
  }

  onChange(event: any) {
    const language = event.target.value;
    this.translocoService.setActiveLang(language);
  }
}
