
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchHistory = signal<Record <string, Gif[]>>({});

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyBaseUrl}/gifs/trending`,
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: '25',
        }
      }
    ).subscribe((response) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({ gifs });
    }
    )
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyBaseUrl}/gifs/search`,
      {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: '25',
        }
      }
    ).pipe( //? transforma el primer argumento y devuelve un observable con el resultado de la transformación
        map( ({ data }) => data), // ?sin procesar, map trandsforma el observable de GiphyResponse a un observable de GiphyItem[]
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)), //? procesado
        //TODO Historiales de busqueda
    )
    /*subscribe( (response) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.searchedGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({ gifs });
    })
      */
  }

}
