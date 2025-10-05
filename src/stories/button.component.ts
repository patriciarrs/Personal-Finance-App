import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'pfa-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
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
  readonly label = input('Button');

  /** Optional click handler */
  readonly handleClick = output<Event>();

  get classes(): string[] {
    const mode = this.primary() ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size()}`, mode];
  }
}
