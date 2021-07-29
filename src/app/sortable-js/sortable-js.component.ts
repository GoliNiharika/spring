import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-sortable-js',
  templateUrl: './sortable-js.component.html',
  styleUrls: ['./sortable-js.component.css']
})
export class SortableJsComponent implements OnInit {

  constructor() { }

  items = [1, 2, 3, 4, 5];
  time
  gridOptions = {
    columnDefs: [
        { field: 'name', sortable: true },
        { field: 'age', sortable: true },

    ],
  }

  obj=[
    {sno:1,
      name: "niharika",
      roll: 1
    },
    {sno:2,
      name: "Goli",
      roll: 4
    }
  ]

  options

  ngOnInit(): void {
    this.options = {
      onUpdate: () => {
        this.obj.forEach((element,index) => {
          element.sno=index+1
        });
      }
    }

  }
  onChange(){
    console.log(moment(this.time).valueOf());
    console.log(moment(1623529800000).format('llll'))
  }

}
