import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss']
})
export class Experiences implements OnInit {
  experiences: any[] = [];
  filteredExperiences: any[] = [];
  selectedTech: string = '';
  searchQuery: string = '';
  showFilter: boolean = false; // Variable pour afficher/masquer le filtre

  // Mappage des technologies avec les noms d'icônes Devicon
  techIcons: { [key: string]: string } = {
    'Git': 'devicon-git-plain',
    'Kotlin': 'devicon-kotlin-plain',
    'Java': 'devicon-java-plain',
    'Clean Architecture': 'devicon-architecture-alt',
    'Android Studio': 'devicon-android-plain',
    'Agile': 'devicon-agile-plain',
    'Xcode': 'devicon-xcode-plain',
    'Swift': 'devicon-swift-plain',
    'iOS': 'devicon-apple-plain',
    'Python': 'devicon-python-plain',
    'RAG': 'devicon-ai-plain',
    'ollama': 'devicon-ai-plain',
    'Langchain': 'devicon-ai-plain',
    'React Native': 'devicon-react-plain',
    'SQL': 'devicon-mysql-plain',
    'Scikit-learn': 'devicon-python-plain',
    'OpenCV': 'devicon-opencv-plain',
    'Jupyter Notebook': 'devicon-jupyter-plain',
    'TensorFlow': 'devicon-tensorflow-plain',
    'Pytorch': 'devicon-pytorch-plain',
    'Php': 'devicon-php-plain',
    'HTML': 'devicon-html5-plain',
    'CSS': 'devicon-css3-plain',
    'JavaScript': 'devicon-javascript-plain',
    'Selenium': 'devicon-selenium-plain',
    'pedagogie': 'devicon-education-cap',
    'communication': 'devicon-communication-plain',
    'mathematiques': 'devicon-math-plain'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/experiences.json').subscribe(data => {
      this.experiences = data;
      this.filteredExperiences = data;
    });
  }

  // Basculer l'affichage du filtre
  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

  // Filtre par technologie
  filterByTech(tech: string): void {
    this.selectedTech = tech;
    this.applyFilters();
  }

  // Filtre par recherche texte
  onSearch(): void {
    this.applyFilters();
  }

  // Applique tous les filtres
  applyFilters(): void {
    this.filteredExperiences = this.experiences.filter(exp => {
      const techMatch = this.selectedTech ? exp.technos.includes(this.selectedTech) : true;
      const searchMatch = this.searchQuery ?
        JSON.stringify(exp).toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      return techMatch && searchMatch;
    });
  }

  // Récupère l'icône pour une technologie
  getTechIcon(tech: string): string {
    return this.techIcons[tech] || 'devicon-default-plain';
  }

  // Récupère la liste unique des technologies
  getUniqueTechnos(): string[] {
    return [...new Set(this.experiences.flatMap(exp => exp.technos))].sort();
  }
}
