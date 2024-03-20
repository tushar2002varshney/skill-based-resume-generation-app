import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [],
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.css'
})
export class DemoFormComponent {
  constructor() { }

  selectTemplate(template: string) {
    console.log('Selected Template:', template);
  }
  }
