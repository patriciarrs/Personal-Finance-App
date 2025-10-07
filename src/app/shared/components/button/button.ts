import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'pfa-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  /** Is this the principal call to action on the page? */
  readonly primary = input(false);

  /** What background color to use */
  readonly backgroundColor = input<string>();

  /** How large should the button be? */
  readonly size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Button contents
   *
   * @required
   */
  readonly label = input('');

  /** Is the button disabled? */
  readonly disabled = input(false);

  /** Button type */
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  /** Optional click handler */
  readonly handleClick = output<Event>();

  get classes(): string[] {
    const mode = this.primary() ? 'button--primary' : 'button--secondary';
    const disabled = this.disabled() ? 'button--disabled' : '';

    return ['button', `button--${this.size()}`, mode, disabled];
  }
}
