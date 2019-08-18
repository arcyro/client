import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../shared/rest-api.service";
import {TestSuite} from "../shared/test-suite";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-test-suite-list',
  templateUrl: './test-suite-list.component.html',
  styleUrls: ['./test-suite-list.component.css']
})
export class TestSuiteListComponent implements OnInit {
  TestSuites: any = [];
  displayedColumns: string[] = ['name', 'time', 'tests', 'failures','messages'];
  constructor(private restApiService: RestApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  console.log(this.route.snapshot.params['id']);
  this.loadEmployees(this.route.snapshot.params['id']);
  }

  // Get employees list
  loadEmployees(id) {
    return this.restApiService.getTestSuitesByRepo(id).subscribe((data: {}) => {
      this.TestSuites = data;
    })
  }


}
