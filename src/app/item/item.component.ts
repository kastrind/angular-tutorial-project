import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { splitDepsDsl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;

  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(side) {
    // NOT recommended: change objects in a single place instead
    //this.character.side = side;
    this.sideAssigned.emit({name: this.character.name, side: side});
  }

}
