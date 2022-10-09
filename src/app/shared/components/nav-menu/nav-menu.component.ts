import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, pluck } from "rxjs/operators";
import { StorageService } from 'src/app/services/storage.service';
import { TranslateConfigService } from '../../../services/translate-config.service';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  message$!: Observable<string>;

  isLogged: boolean = false;

  attributes: any;

  constructor(
    private router: Router,
    private TranslateConfigService: TranslateConfigService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.message$ = this.storageService.storageChange$.pipe(
      filter(({ storageArea }) => storageArea === "sessionStorage"),
      filter(({ key }) => key === "message"),
      map(x => x?.value)
    );

    this.message$.subscribe((response) => {
      console.log('See your response', response);
      if(response == "Logged"){
        this.getAttributes();
      }else{
        this.isLogged = false;
      }
    });
  }

  changeLang(lang: string){
    this.TranslateConfigService.changeLanguage(lang);
  }

  onLogout(): void {
    Auth.signOut().then( () => {
      this.setMessage("noLogged");
      this.router.navigate(['/']);
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getAttributes(): void {
    Auth.currentUserInfo().then( user => {
      this.attributes = user.attributes;
      this.isLogged = true;
      // alert(JSON.stringify(this.attributes));
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  setMessage(value: string): void {
    this.storageService.setStorageItem({
      key: "message",
      value,
      storageArea: "sessionStorage"
    });
  }
}
