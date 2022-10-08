import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../../services/translate-config.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private TranslateConfigService: TranslateConfigService) { }
  isExpanded = false;
  ngOnInit(): void {
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  changeLang(lang: string){
    this.TranslateConfigService.changeLanguage(lang);
  }
}
