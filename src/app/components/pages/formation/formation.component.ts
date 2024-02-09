import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  launch = 'assets/images/launch.svg'
  

  formations = [
    {
      date: '2024',
      title: 'Fin de l\'alternance chez Stellantis',
      description: 'Description 1',
      isInGroupe: false
    },
    {
      date: '2023 - 2024',
      title: '3 ème année de BUT Informatique',
      description: 'Description 1',
      isInGroupe: false
    },
    {
      date: '2022',
      title: 'Début de l\'alternance chez Stellantis',
      description: 'Description 1',
      isInGroupe: true
    },
    {
      date: '2022 - 2023',
      title: '2 ème année de BUT Informatique',
      description: 'Description 1',
      isInGroupe: false
    },
    {
      date: '2021 - 2022',
      title: '1 er année de BUT Informatique',
      description: 'Description 1',
      isInGroupe: false
    },
    {
      date: '2020 - 2021',
      title: 'Baccalauréat général',
      description: 'Description 2',
      isInGroupe: false
    },
  ]
}
