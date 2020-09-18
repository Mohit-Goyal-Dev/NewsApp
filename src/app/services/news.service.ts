import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { News, NewsResponse } from "../model/news";
import "rxjs/add/operator/map";

@Injectable()
export class NewsService {
  constructor(private http: Http) {}
  baseUrl = "https://api.nytimes.com/svc/topstories/v2/";

  getSectionNews(sectionName: string): any {
    // fetch news of that sectionName
    let url =
      "https://api.nytimes.com/svc/topstories/v2/" +
      sectionName +
      ".json?api-key=315a5a51483b469a918246dc2753b339";

    // this.http.get(url).subscribe((response) => {
    //   console.log(response.json());
    // });
    return this.http.get(url);
  }
}
