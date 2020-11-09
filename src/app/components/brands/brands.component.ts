import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../models/Brewery';
import { Location } from '../../models/Location';
import { BreweryBeers } from '../../models/BreweryBeers';
import { dataClass } from '../../models/dataClass';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  dataList: dataClass;
  dataListLoc: dataClass;
  dataListBeers: dataClass;
  beers: [BreweryBeers] = [null];
  breweries: [Brewery] = [null];
  locations: [Location] = [null];
  beersAndCountry: [Brewery] = [null];

  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.getBreweries(); // get data
    this.createList(); // sort data
    //TODO group data buttons
  }

  createList() {
    // match beers and location list then get:
    // locations => countryIsoCode
    // beers = > name
    let idMap = this.breweries.map(brew => {
      const loc = this.locations.find(location => location.brewId === brew.brewId);
      return {
        ...this.beersAndCountry,
        location: loc ? loc.brewId : undefined
      };
    });
    console.log(idMap);
  }

  getBreweries() {
    this.breweries.pop(); // for now, i have to clear the 1st null value
    this.beers.pop();
    this.locations.pop();

    this.brandService.getBreweriesData().subscribe((data) => {     // request breweries
      this.dataList = data;
      for (let i of this.dataList.data) {
        this.breweries.push(i);
        this.getLocations(i.id); // request locations per brewery
        this.getBreweryBeers(i.id); // request beers per brewery
      }
    })
  }

  getLocations(id: string) {
    this.brandService.getBreweryLocData(id).subscribe((data) => {
      this.dataListLoc = data;
      if (this.dataListLoc.data) {
        for (let j of this.dataListLoc.data) {
          j.brewId = id // adding brewery ID to the list
          this.locations.push(j);
        }
      }
    })
  }

  getBreweryBeers(id: string) {
    this.brandService.getBreweryBeerData(id).subscribe((data) => {
      this.dataListBeers = data;
      if (this.dataListBeers.data) {
        for (let k of this.dataListBeers.data) {
          k.brewId = id // adding brewery ID to the list
          this.beers.push(k);
        }
      }
    })
  }
}
