import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'forms-details',
  templateUrl: './forms-details.component.html',
  styleUrls: ['./forms-details.component.scss']
})
export class FormsDetailsComponent implements OnInit {

  public id;
  public loginName;
  public subject;
  public description;
  public panelOpenState = false;

  constructor(public dataService: DataService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
        this.getForm(id);
      });
  }

  getForm(id) {
    return this.dataService.getForm(id).subscribe(res => {
      this.id = res['id'];
      this.loginName = res['loginName'];
      this.subject = res['subject'];
      this.description = res['description'];
    });
  }
}
