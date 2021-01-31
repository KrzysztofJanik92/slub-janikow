import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'ten-input-control',
  templateUrl: './input-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputControlComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() inputClass: string;
  @Input() floatLabel: FloatLabelType = 'auto';
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() controlType = 'text';
  @Input() asterisk: boolean;
  @Input() min: number;
  @Input() max: number;
  @Input() readOnly: boolean;

  clearValue(): void {
    this.control.setValue('', { onlySelf: false, emitEvent: true });
  }
}
