import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  haveAccess(): boolean {
    return true;
  }
}
