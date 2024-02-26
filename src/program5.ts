import { Veteran } from './veteran';
import { Young } from './young';
import { Logable } from './logable';
import { Player } from './player'
import { ReadytoPlay } from './readytoPlay';
import { International } from './international';


let young = new Young ('Mbappe', 91, 99);
let veteran = new Veteran ('Cristiano Ronaldo', 86, 83)

let readytoPlay = new ReadytoPlay();
readytoPlay.readytoPlay(veteran)
readytoPlay.readytoPlay(young)
