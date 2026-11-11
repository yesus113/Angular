import { Gif } from "../interfaces/gif.interface"
import { GiphyItem } from "../interfaces/giphy.interfaces"

export class GifMapper {
  static mapGiphyResponseToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
      author: item.username || 'Unknown'
    }
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyResponseToGif);
  }
}

