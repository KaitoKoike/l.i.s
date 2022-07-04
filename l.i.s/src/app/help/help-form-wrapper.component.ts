import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';


@Component({
  selector: 'help-formly-wrapper',
  template: ` 
    <div style='margin-top:40px'>  
    <label *ngIf="props.label && props['hideLabel'] !== true" [attr.for]="id" class="form-label" 
      style="padding-right:2.5px">
        {{ props.label }}
        <span *ngIf="props.required && props['hideRequiredMarker'] !== true" aria-hidden="true" class='required_mark' 
        style="
                background-color: #181818;
                color: #FFFFFF;
                font-size: 10px;
                line-height: 150%;
                padding: 3px 7px 4px 7px;
                margin:2.5px 8px;
              ">必須</span>
      </label>
      <div>
      <ng-template #fieldComponent></ng-template>
      </div>
      <small *ngIf="props.description" class="form-text text-muted">{{ props.description }}</small>
    </div>
    <div class="mb-3" [class.form-floating]="props['labelPosition'] === 'floating'" [class.has-error]="showError">
      <ng-container *ngIf="props['labelPosition'] !== 'floating'">
        <ng-container [ngTemplateOutlet]="fieldComponent"></ng-container>
      </ng-container>

      <ng-container *ngIf="props['labelPosition'] === 'floating'">
        <ng-container [ngTemplateOutlet]="fieldComponent"></ng-container>
      </ng-container>

      <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>

      
    </div>
  `,
})
export class HelpFormWrapper extends FieldWrapper {
}
