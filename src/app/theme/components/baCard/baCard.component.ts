import {Component, Input} from '@angular/core';
import {BaCardBlurHelper} from './baCardBlurHelper.service';
import {BaCardBlur} from './baCardBlur.directive';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
  @Input() cardType:String;
  @Input() href:String
}
