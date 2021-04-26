import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog-service.service';

@Component({
  selector: 'app-dog-home',
  templateUrl: './dog-home.component.html',
  styleUrls: ['./dog-home.component.css']
})
export class DogHomeComponent implements OnInit {
  private title: string = "Dog List";
  private dogs: [] = [];

  constructor(dogData: DogService) { 
    this.dogs = JSON.parse(JSON.stringify(dogData.all()));
    console.log(this.dogs);
  }

  ngOnInit(): void {
    
  }

}
