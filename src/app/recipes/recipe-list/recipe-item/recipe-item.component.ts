import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<string>();
  @Input() recipe: Recipe;

  constructor() { }

  clickedRecipe(recipe: string) {
    this.recipeClicked.emit(recipe);
    console.log("clicked Recipe: ", recipe);
  }


  ngOnInit() {
  }

}
