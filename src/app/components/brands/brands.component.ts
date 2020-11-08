import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../models/Brewery';
import { dataClass } from '../../models/dataClass';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  dataList: dataClass;
  dataList2: dataClass;
  dataListBeers: dataClass;
  beers: [Brewery] = [null];
  breweries: [Brewery] = [null];
  locations: [Brewery] = [null];

  constructor(private brandService: BrandService) { }

  ngOnInit() {
    // get data
    this.getBreweries();
    // sort data to one list
    this.createList();
  }

  createList() {
    // TODO think of a way to insert breweryID in both lists
    // match beers and location list then get:
    // locations => countryIsoCode
    // beers = > name
  }

  getBreweries() {
    this.breweries.pop();
    // request breweries
    this.brandService.getBreweriesData().subscribe((data) => {
      console.log(data);
      this.dataList = data;
      for (let i of this.dataList.data) {
        this.breweries.push(i);
        // request locations per brewery
          this.brandService.getBreweryLocData(i.id).subscribe((data) => {
            this.dataList2 = data;
            if (this.dataList2.data) {
              for (let i of this.dataList2.data) {
                this.locations.push(i);
              }
            }
          })
        // request beers per brewery
        this.brandService.getBreweryBeerData(i.id).subscribe((data) => {
          this.dataListBeers = data;
          if (this.dataListBeers.data) {
            for (let i of this.dataListBeers.data) {
              this.beers.push(i);
            }
          }
        })
      }
    })
    console.log(this.beers);
    console.log(this.locations);
  }

  getBeers() {
    this.beers.pop();
    this.brandService.getBeersData().subscribe((data) => {
      console.log(data);
      this.dataListBeers = data;
      for (let i of this.dataListBeers.data) {
        this.beers.push(i);
      }
    })
  }

  getBreweriesLoc() {
    this.locations.pop();
    for (let brewery of this.dataList.data) {
      this.brandService.getBreweryLocData(brewery.id).subscribe((data) => {
        console.log(data);
        this.dataList2 = data;
        if (this.dataList2.data) {
          for (let i of this.dataList2.data) {
            this.locations.push(i);
          }
        }
      })

    }
  }

  getLocation(brewery) {
    this.brandService.getBreweryLocData(brewery.id).subscribe((data) => {
      console.log(data);
      this.dataList2 = data;
      if (this.dataList2.data) {
        for (let i of this.dataList2.data) {
          this.locations.push(i);
        }
      }
    })
  }
}
