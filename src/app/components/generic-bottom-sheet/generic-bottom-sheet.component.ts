import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-generic-bottom-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-bottom-sheet.component.html',
  styleUrl: './generic-bottom-sheet.component.css'
})
export class GenericBottomSheetComponent {

  @Input() data: any;

  constructor(private bottomSheetRef: MatBottomSheetRef<GenericBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public sheetData: any) {
    this.data = sheetData;
  }

  closeSheet(): void {
    this.bottomSheetRef.dismiss();
  }
}
