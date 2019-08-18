import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../shared/rest-api.service";

@Component({
  selector: 'app-test-repo-list',
  templateUrl: './test-repo-list.component.html',
  styleUrls: ['./test-repo-list.component.css']
})
export class TestRepoListComponent implements OnInit {

  constructor(private restApiService: RestApiService) {
  }
  testRepos: any = [];

  ngOnInit() {

    this.loadTestRepos();
  }

  loadTestRepos() {
    return this.restApiService.getTestRepos().subscribe((data: {}) => {
      this.testRepos = data;
    })
  }

}
