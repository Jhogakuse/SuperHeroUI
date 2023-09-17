import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  constructor(private superHeroService: SuperHeroService) {}
  ngOnInit(): void{}
  
  /**
   * Update a hero
   * @param hero 
   */
  updateHero(hero: SuperHero) {
    this.superHeroService
    .updateSuperHeroes(hero)
    .subscribe((heroes: SuperHero[]) => {
      console.log(heroes);
    });
  }
  
  /**
   * Delete a hero
   * @param hero 
   */
  deleteHero(hero: SuperHero) {
    this.superHeroService
    .deleteSuperHero(hero)
    .subscribe((heroes: SuperHero[]) => {
      console.log(heroes);
    });
  }
  
  /**
   * Create a hero
   * @param hero 
   */
  createHero(hero: SuperHero) {
    this.superHeroService
    .createSuperHeroes(hero)
    .subscribe((heroes: SuperHero[]) => {
      console.log(heroes);
    });
  }
}
