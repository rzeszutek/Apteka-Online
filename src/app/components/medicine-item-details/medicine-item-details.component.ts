import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine-item-details',
  templateUrl: './medicine-item-details.component.html',
  styleUrls: ['./medicine-item-details.component.scss']
})
export class MedicineItemDetailsComponent implements OnInit {

  public items$: any;
  public name: string;
  public price: string;
  public imageUrl: string;
  public reimbursed: boolean;
  public prescription: boolean;
  public description: string;
  public id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getById(id).subscribe(res => {
      this.items$ = res;
      this.name = res['image'];
      this.price = res['price'];
      this.imageUrl = res['imageUrl'];
      this.reimbursed = res['reimbursed'];
      this.prescription = res['prescription'];
      this.description = res['description'];
      this.id = res['id'];
      console.log(res);
    });
  }
}
