import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.scss']
})
export class SearchDashboardComponent implements OnInit {

  giphyImages: any[] = [];
  config: any;
  count: number = 1;
  itemsPerPage: number = 9;

  searchText: any ;
  altTextForImage :string = "Image Not Found..."

  constructor(public searchService: SearchService) {
   
    this.searchClick('giphy');
  }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.count,
      totalItems: 50
    };
  }

  searchClick(searchText:any): void {
    this.searchService.getImagesFromGiphy(searchText).subscribe((response: any) => {
      this.giphyImages = response.data;
    })
  }

  pageChanged(event: number) {
    this.count = event;

    this.config.currentPage = this.count;
    var offset = this.itemsPerPage*this.count ;
    this.searchService.getOffsetImageFromGiphy(this.searchText, offset).subscribe((response: any) => {
      this.giphyImages = response.data;
    })
  }

}
