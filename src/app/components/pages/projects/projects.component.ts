import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: any[] = [
    {
      title: "Mygale",
      date: "Février 2022 - Aujourd'hui",
      description: "Mygale est une application qui permet de calculer les images d'une animation 3D et répartir les calculs sur plusieurs machines.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://github.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
    {
      title: "Creative in Motion",
      subTitle: "Sub Project 2",
      description: "This is a project This is a project This is a project This is a project This is a project This ",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://linkedin.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
    {
      title: "API Angular",
      subTitle: "Sub Project 3",
      description: "This is a project This is a project This is a project This is a project This is a project This ",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://linkedin.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
    {
      title: "API REST",
      subTitle: "Sub Project 4",
      description: "This is a project This is a project This is a project This is a project This is a project This ",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://linkedin.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
    {
      title: "Site Web PHP",
      subTitle: "Sub Project 5",
      description: "This is a project This is a project This is a project This is a project This is a project This ",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://linkedin.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
    {
      title: "Terraria-Like Java",
      subTitle: "Sub Project 6",
      description: "This is a project This is a project This is a project This is a project This is a project This ",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://linkedin.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
    {
      title: "Othello Java",
      subTitle: "Sub Project 7",
      description: "This is a project This is a project This is a project This is a project This is a project This ",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      link: "https://linkedin.com/",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      ]
    },
  ]
}
