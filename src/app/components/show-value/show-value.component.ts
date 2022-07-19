import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.scss'],
})
export class ShowValueComponent {
  counter$ = this.counterService.counter$;

  constructor(public counterService: CounterService) {}

  clearCounter(): void {
    this.counterService.counter$.next(0);
  }
}
