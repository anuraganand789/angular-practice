import { BaseType } from './base-type';

export interface Base{
  [index : string] : number | string | BaseType | number[] | boolean | undefined
  //The Item's unique Id : required
  id          :    number;

  //true if item is deleted : optional
  deleted?     :    boolean;

  //The type of item. One of 'job', 'story', 'comment', 'poll' or 
  //'pollopy' : allowed values are 
  //job, story, comment, poll, pollopt
  //required
  type        :    BaseType ;

  //Optional : username of the items' author
  by?         :    string;

  //optional : creation date of the time, in Unix time
  time?        :    number;

  //optional : true if the item is dead
  dead?        :    boolean;

  //optional : the ids of the items comments in ranked display order
  kids?          : number[];

}
