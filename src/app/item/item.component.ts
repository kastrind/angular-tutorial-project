import { Component, OnInit, Input } from '@angular/core';
import { splitDepsDsl } from '@angular/core/src/view/util';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    // NOT recommended: change objects in a single place instead
    // this.character.side = side;
    this.swService.onSideChosen({name: this.character.name, side: side });

  }

}
