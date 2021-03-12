import { Base } from './base';

export interface PollOption extends Base{
  //Optional: the item's parent. For comments, either 
  //another comment or relevant story. For pollopts, the relevant
  //poll.
  parent?  :  number;

  //Optional : The story's score, or the votes for a pollopt
  score?   :  number;
}
