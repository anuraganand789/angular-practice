import { Base } from 'base.ts';

export interface Story extends Base{
  
  //Optional : In the case of stories or polls, the total comment 
  //count
  descendants? : number;

  //Optional : The story's score, or the votes for a pollopt
  score?       : number;

  //optional : the title of the story, poll or job
  title?        : string;

  //Optional : the url of the story
  url?          : string;
}
