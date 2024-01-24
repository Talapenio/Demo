import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  @Input()
  title = "Default title"

  @Input()
  isDisabled = true;
}
