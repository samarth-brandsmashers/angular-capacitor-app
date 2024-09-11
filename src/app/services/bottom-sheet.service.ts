import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GenericBottomSheetComponent } from '../components/generic-bottom-sheet/generic-bottom-sheet.component';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(data: any): void {
    this.bottomSheet.open(GenericBottomSheetComponent, {
      data: data
    });
  }
}
