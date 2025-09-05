import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    CounterComponent
  ]
})
export class SharedModule { }
