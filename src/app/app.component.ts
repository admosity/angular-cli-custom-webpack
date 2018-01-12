import { Component } from '@angular/core';
import * as testJson from './test.json';
import * as testMd from './test.md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testJson = testJson.data;
  testLoadMarkdown = testMd;
}
