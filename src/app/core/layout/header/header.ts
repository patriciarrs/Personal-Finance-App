import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Button } from '../../../shared/components/button/button';
import type { User } from '../../../shared/models/user';

@Component({
  selector: 'pfa-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly user = input<User | null>(null);

  readonly handleLogin = output<Event>();

  readonly handleLogout = output<Event>();

  readonly handleCreateAccount = output<Event>();
}
