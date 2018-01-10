import { Component, OnInit } from '@angular/core';

const BASE_URL = 'http://thecatapi.com/api/images/get?format=src&type=gif&category=';

@Component({
  selector: 'meow-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  private categories: string[] = [
    'hats',
    'space',
    'funny',
    'sunglasses',
    'boxes',
    'caturday',
    'ties',
    'dream',
    'kittens',
    'sinks',
    'clothes'
  ];

  public imageSrc = '';

  constructor() { }

  ngOnInit() {
    this.generateNewImage();
  }

  public generateNewImage() {
    this.imageSrc = `${BASE_URL}${this.categories[Math.floor(Math.random() * this.categories.length)]}`;
  }
}
