import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss'],
})
export class IncrementComponent {
  constructor(public counterService: CounterService) {}

  incrementCounter(): void {
    this.counterService.counter$.next(this.counterService.counter$.value + 1);
  }
}
