import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'SEBASTIAN';
  public nameUpper: string = 'sebastian';
  public nameTitle: string = 'sEbAStIaN gOmEz';
  public customDate: Date = new Date();
}
