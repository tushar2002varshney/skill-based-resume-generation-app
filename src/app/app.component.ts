import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoFormComponent } from "./components/demo-form/demo-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DemoFormComponent]
})
export class AppComponent {
  title = 'skill-based-resume-generation-app';
}
