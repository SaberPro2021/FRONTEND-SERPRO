import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsVariablesService {

  private pageTitle: string;

  constructor() { }


  setPageTitle (pageTitle: string){
    this.pageTitle = pageTitle;
  }
  getPageTitle (): string {
    return this.pageTitle;
  }
}
