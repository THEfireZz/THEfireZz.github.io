import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  programmingImage = "assets/images/programmingYellow.svg";

  skillIconList: string[] = [];
  toolIconList: string[] = [];

  skillIcons: string[] = [
    "devicon-cplusplus-plain",
    "devicon-java-plain",
    "devicon-python-plain",
    "devicon-javascript-plain",
    "devicon-php-plain",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-angularjs-plain",
    "devicon-docker-plain",
    "devicon-qt-original",
    "devicon-tailwindcss-plain",
    "devicon-bootstrap-plain",
    "devicon-postgresql-plain",
    "devicon-git-plain"
  ]

  toolsIcons: string[] = [
    "devicon-visualstudio-plain",
    "devicon-windows8-original",
    "devicon-linux-plain",
    "devicon-jetbrains-plain",
    "devicon-github-original",
    "devicon-unrealengine-original",
    "devicon-blender-original"
  ]

  ngOnInit(): void {
    this.setSkillIconColors();
    this.setToolIconColors();
  }


  setToolIconColors(): void {
    const totalIcons = this.toolsIcons.length;
    const yellowPercentage = 0.8; // 80% jaune
    const variation = 0.1; // Variation possible autour du pourcentage souhaité

    let yellowCount = Math.round(totalIcons * yellowPercentage);
    yellowCount += Math.floor(Math.random() * (totalIcons * variation * 2) - totalIcons * variation);

    if (yellowCount < 0) {
      yellowCount = 0;
    } else if (yellowCount > totalIcons) {
      yellowCount = totalIcons;
    }

    for (let i = 0; i < totalIcons; i++) {
      if (i < yellowCount) {
        this.toolIconList.push('icons-secondary'); // Jaune
      } else {
        this.toolIconList.push('icons-tertiary');
      }
    }

    this.shuffleArray(this.toolIconList); // Mélange aléatoire des couleurs
  }


  setSkillIconColors(): void {
    const totalIcons = this.skillIcons.length;
    const yellowPercentage = 0.8; // 80% jaune
    const variation = 0.1; // Variation possible autour du pourcentage souhaité

    let yellowCount = Math.round(totalIcons * yellowPercentage);
    yellowCount += Math.floor(Math.random() * (totalIcons * variation * 2) - totalIcons * variation);

    if (yellowCount < 0) {
      yellowCount = 0;
    } else if (yellowCount > totalIcons) {
      yellowCount = totalIcons;
    }

    for (let i = 0; i < totalIcons; i++) {
      if (i < yellowCount) {
        this.skillIconList.push('icons-secondary'); // Jaune
      } else {
        this.skillIconList.push('icons-tertiary');
      }
    }

    this.shuffleArray(this.skillIconList); // Mélange aléatoire des couleurs
  }




  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
