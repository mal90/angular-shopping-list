import {EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[ new Ingredient('Meat',1),
         new Ingredient('Cabbage',5)]),
        new Recipe('A Test Recipe', 'This is another test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[ new Ingredient('Meat',1),
         new Ingredient('French fries',1)])
    ];

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToSL(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}