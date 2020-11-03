import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/Brand'
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: Brand[];


  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getBrands().subscribe(brands => {
      data => console.log('succes', data)
      error => console.log('oops', error)
      this.brands = brands
    });
  }

}
