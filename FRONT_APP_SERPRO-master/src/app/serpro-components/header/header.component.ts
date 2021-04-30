import {Component, Input, OnInit} from '@angular/core';
import { UserSettingsVariablesService } from 'src/app/services/user-settings-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  pageTitle: string;
  constructor(userSettingsVariablesService: UserSettingsVariablesService) { 
    this.pageTitle = userSettingsVariablesService.getPageTitle ();
  }

  ngOnInit(): void {
  }

}
