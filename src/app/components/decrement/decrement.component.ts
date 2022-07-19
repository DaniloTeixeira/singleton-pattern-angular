import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.scss'],
})
export class DecrementComponent {
  constructor(public counterService: CounterService) {}

  decrementCounter(): void {
    this.counterService.counter$.next(this.counterService.counter$.value - 1);
  }
}
