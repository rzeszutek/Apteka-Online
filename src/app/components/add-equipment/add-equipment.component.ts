import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  selector: 'add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {


  public credentials = {
    name: '',
    price: '',
    imageUrl: '',
    description: ''
  }

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createOrUpdateEquipment() {
    return this.dataService.createOrUpdateEquipment(this.credentials);
  }
}
