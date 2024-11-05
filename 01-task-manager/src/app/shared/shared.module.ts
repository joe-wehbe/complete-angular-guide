import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] // Export it so it can made available to app.module.ts
})
export class SharedModule {}