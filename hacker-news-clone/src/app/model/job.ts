import { Base } from './base';

export interface Job extends Base{
  //Optional : The comment, story or poll text HTML.
  text? : string;
  //Optional : The url of the story 
  url   : string;

  //Optioal : The title of the story, poll or job
  title? : string ;

}
