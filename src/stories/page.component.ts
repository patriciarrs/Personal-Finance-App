import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import type { User } from './user';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.scss'],
  selector: 'pfa-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
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
