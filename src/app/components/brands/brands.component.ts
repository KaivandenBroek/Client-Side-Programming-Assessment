import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/Brand'
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  dataList: Brand;
  brands = [this.dataList];

  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getBrands().subscribe((data) => {
      console.log(data);
      this.dataList = data
      //this.brands = data
    })
   // this.brandService.getBrands().subscribe((data) => this.brands = data )

    //this.brandService.getBrands().pipe
  }

}
