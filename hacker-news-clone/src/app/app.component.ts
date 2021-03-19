import { Component, OnInit }   from '@angular/core';
import { HackerNewsService }   from './hacker-news.service';
import { Story }               from './model/Story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hacker-news-clone';
  story? : Story;

  constructor(public hackerNewsService : HackerNewsService){ }

  ngOnInit() {
      this.hackerNewsService.readStory("8863").subscribe((story : Story) => this.story = story); 
  }

  objectKeys(story : Story){
      return Object.keys(story);
  }

  getStoryValue(key : string){
      return (this.story != null && this.story != undefined) ?  this.story[`${key}`] : null;
  }

}
