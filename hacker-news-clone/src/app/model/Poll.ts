import { Base } from './base';

export interface Poll extends Base{

  //optional : a list of related pollopts, in display order
  parts?       :  int[];

  //optional : in the case of stories or polls, the total comment count
  descendants? :  number;

  //optional : The story's score or the votes for a pollopt
  score       : number;

  //optional : the title of the story, poll or job
  title       :  string;

  //optional : the comment, story or poll text, HTML
  text        :  string;
}
