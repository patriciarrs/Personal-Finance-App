import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Header } from '../header/header';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'pfa-page',
  imports: [Header],
  templateUrl: './page.html',
  styleUrl: './page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page {
  user: User | null = null;

  doLogout(): void {
    this.user = null;
  }

  doLogin(): void {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount(): void {
    this.user = { name: 'Jane Doe' };
  }
}
