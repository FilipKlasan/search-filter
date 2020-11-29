import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  incl: string;
  websites = [ { name: 'Ford', URL: 'https://www.ford.com' },
               { name: 'Mercedes-Benz', URL: 'https://www.mercedes-benz.com' },
               { name: 'Toyota', URL: 'https://www.toyota.com' }
             ];
  visibleWebsites = [];
  show: boolean = false;
  websiteCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  searchWebsite(input) {
    this.visibleWebsites = [];
    input.style.borderBottomLeftRadius = '5px';
    input.style.borderBottomRightRadius = '5px';
  
    this.show = false;
    this.websiteCounter = 0;
    if(this.websites.length > 0) {
     this.websites.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if(x < y) {return -1;}
        if(x > y) {return 1;}
        return 0;
     });
     let tempIncl = this.incl.toUpperCase();
     for(let i = 0; i < this.websites.length; i++) {
       if(tempIncl != '') {
         if(this.websites[i].name.toUpperCase().startsWith(tempIncl)
         /* || this.websites[i].name.toUpperCase().indexOf(tempIncl) > -1 */) {
           this.visibleWebsites.push(this.websites[i]);
           this.show = true;
           this.websiteCounter += 1;
           input.style.borderBottomLeftRadius = '0px';
           input.style.borderBottomRightRadius = '0px';
           input.style.borderTopLeftRadius = '5px';
           input.style.borderTopRightRadius = '5px';
         }
         else {
           continue;
         }
       }
     }
    } 
  }

  nav(URL) {
      window.location.href = URL;
  }

}