import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eventFilter' })
export class EventFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string, price: number): any[] {
    if (!items) {
      return [];
    }
    if (!searchText && !price) {
      return items;
    }

    if (!price && searchText) {
      searchText = searchText.toLocaleLowerCase();

      return items.filter((it) => {
        return it.city.toLocaleLowerCase().includes(searchText);
      });
    }

    if(!searchText && price) {
      return items.filter((it) => {
        return it.price >= price;
      });
    }
    
    if(searchText && price) {
      return items.filter((it) => {
        return it.price >= price && it.city.toLocaleLowerCase().includes(searchText);
      });
    }

    return items;
  }
}
