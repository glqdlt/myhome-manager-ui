import {NgModule} from "@angular/core";
import {FormEditorComponent} from "./form-editor.component";
import {FormEditorDeactivatedService} from "./form-editor-deactivated.service";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [ReactiveFormsModule,CommonModule],
    exports :[FormEditorComponent],
    declarations : [FormEditorComponent],
    providers : [FormEditorDeactivatedService]
})
export class FormEditorModule{



}