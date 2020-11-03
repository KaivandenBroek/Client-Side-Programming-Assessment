import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/models/Brand';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {

  @Input() brand: Brand;

  constructor() { }

  ngOnInit(): void {
  }

}
