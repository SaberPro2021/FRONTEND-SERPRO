import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IcfesModule } from 'src/app/models/module.model';

import { Observable } from 'rxjs';
import { profile } from 'src/app/models/profile.model';
import { userImageService } from '../../services/userImage.service';
@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName : string;
  email : string;
  image : string;
  module:IcfesModule;
  sizeTemporal: Number[];


  userId: string;
  user: Observable<profile[]>;

  constructor(private route: ActivatedRoute, private userImageService: userImageService) { 
    this.sizeTemporal = [1,2,3,4,5];
    this.userName = sessionStorage.getItem('userNameSession');
    this.email = sessionStorage.getItem('emailSession');
    this.image = sessionStorage.getItem('imageSession');
    
  }

  ngOnInit(): void {
   
  }


  
 
}
