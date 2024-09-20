import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleModalService {

  constructor() { }

  $modal = new EventEmitter<Boolean>()
}