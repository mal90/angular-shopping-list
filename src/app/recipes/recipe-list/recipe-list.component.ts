import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe 1','This is recipe no. 1','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fportrait_435x518%2Fpublic%2Fimage%2Fimages%2Ffood-recipes%2Frecipe-collections%2F0804%2Fmini-burger_300.jpg%3Fitok%3DOWhS6WbV&w=700&q=85'),
    new Recipe('Recipe 1','This is recipe no. 1','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fportrait_435x518%2Fpublic%2Fimage%2Fimages%2Ffood-recipes%2Frecipe-collections%2F0804%2Fmini-burger_300.jpg%3Fitok%3DOWhS6WbV&w=700&q=85')
  ]    

  constructor() { }

  ngOnInit() {
  }

}
