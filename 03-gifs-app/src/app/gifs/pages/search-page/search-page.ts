import { Component, inject, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
   gifService = inject(GifService);
   gifs = signal<Gif[]>([]);

  onSearch( query: string) {
    console.log({ query });
    this.gifService.searchGifs(query)
    .subscribe((resp) => {
    this.gifs.set(resp);
      //console.log({ resp });
    });
  }
}
