import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  level: string;
  price: number;
  id: number;
  duree: number;

  constructor() { }

  ngOnInit() {
  }

}
