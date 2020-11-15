import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from 'src/app/models/Brewery';
import { BeersAndCountry } from '../../models/BeersAndCountry';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {

  @Input() brewery: Brewery;
  @Input() beersAndCountry: BeersAndCountry;

  constructor() { }

  ngOnInit(): void {
  }

}
