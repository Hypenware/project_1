import { Component, } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes :recipe[] = [new recipe('test recipe-1','test description-2','https://picsum.photos/600')
  ,new recipe('test recipe-2','test description-2','https://picsum.photos/600')];
  constructor(){}
}
