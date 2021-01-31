import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'ten-select-control',
  templateUrl: './select-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectControlComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() inputClass: string;
  @Input() floatLabel: FloatLabelType = 'auto';
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() controlType = 'text';
  @Input() asterisk: boolean;
  @Input() values: any[] = [];
  @Input() valueKey: string;
  @Input() viewValueKey: string;
  @Input() multiSelect: boolean;
  @Input() disable: boolean;
  @Input() chooseOptionsLimit: number;
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();

  emitSelectedValue(value: any) {
    this.selectedValue.emit(value);
  }

  disableAddingNextValue(isSelected: boolean): boolean {
    if (!isSelected && this.chooseOptionsLimit) {
      return (this.control?.value?.length >= this.chooseOptionsLimit);
    }
  }

}
