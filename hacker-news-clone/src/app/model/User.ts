export interface User {
  //requried : the user's unique username. Case-sensitive
  id        :   string ;

  //optional : Delay in minutes between a comment's,
  //creation and its visibility to other users.
  delay?    :    number;

  //required : Creation data of the user, in Unix Time
  created   :    number;

  //required : The user's karma
  karma     :    number;

  //optional : The users' optional self-description
  about     :    string;

  //optional : List of the users' stories, polls and comments
  submitted :    int[];
}
