import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

}
