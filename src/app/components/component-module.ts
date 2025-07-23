import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ModalFormComponent } from "./modals/modal-form/modal-form.component";
import { FormsModule } from "@angular/forms";
import { PhotoViewerComponent } from "./modals/photo-viewer/photo-viewer.component";

export const components = [
    ModalFormComponent,
    PhotoViewerComponent
]

@NgModule({
    declarations: [components],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule

    ],
    exports: [components]
})

export class ComponentsModule { };