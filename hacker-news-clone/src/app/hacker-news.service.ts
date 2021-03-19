import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from './model/Story';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  readonly hackerNewsApiBaseUrl = "https://hacker-news.firebaseio.com/v0/item";

  constructor(private http: HttpClient) { }

    readStory(storyId : string) : Observable<Story>{

        const story = 
        this.http
        .get<Story>(`${this.hackerNewsApiBaseUrl}/${storyId}.json`)
        .pipe(tap((story : Story) => console.log(story)));

        return story;
    }

}
