import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import type { User } from './user';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pfa-header',
})
export class HeaderComponent {
  readonly user = input<User | null>(null);

  readonly handleLogin = output<Event>();

  readonly handleLogout = output<Event>();

  readonly handleCreateAccount = output<Event>();
}
