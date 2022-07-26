import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  constructor(private data: DataService) {
  }
  ngOnInit(): void {
    this.data.videos.subscribe((res) => this.data.updateDisplayVideos(res))
  }
}
