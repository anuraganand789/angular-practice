import { Base } from './base.ts';

export interface Comment extends Base{
  
  //optional : the item's parent. For comments, either another
  //comment or the relevant story. For pollopts, the relevant poll.
  parent?  :  number;

  //optional : the comment, story or poll text. HTML
  text?    :  string;
}
