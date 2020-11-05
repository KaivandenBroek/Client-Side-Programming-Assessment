import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/Brand'
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  dataList: dataClass;
  brands: [Brand] = [];

  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getBrands4().subscribe((data) => {
      console.log(data);
      this.dataList = data
      for (let i of this.dataList.data) {
        this.brands.push(i);
        //console.log(i);
      }
      //this.brands = [this.dataList.data[0]];
      //console.log(this.brands[0].id);
    })
  }

}
// a dataClass to read the nestles json data
class dataClass {
  data: any
}
