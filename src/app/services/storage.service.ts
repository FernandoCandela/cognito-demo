import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

export interface StorageChange {
  key: string;
  value: string;
  storageArea: "localStorage" | "sessionStorage";
}

export interface StorageGetItem {
  key: string;
  storageArea: "localStorage" | "sessionStorage";
}

@Injectable({ providedIn: "root" })
export class StorageService {
  public storageChange$: ReplaySubject<StorageChange> = new ReplaySubject();

  constructor() {}

  public setStorageItem(change: StorageChange): void {
    window[change.storageArea].setItem(change.key, change.value);
    this.storageChange$.next(change);
  }

  public getStorageItem(getItem: StorageGetItem): void {
    window[getItem.storageArea].getItem(getItem.key);
  }
}
