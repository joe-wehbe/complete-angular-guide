import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // Module provided by Angular that includes directives and features needed for Angular apps such as DatePipe

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent ], // declaration is for non-standalone components
    bootstrap: [AppComponent], // takes an array of root components (typically one)
    imports: [BrowserModule, SharedModule, TasksModule] // imports array is for standalone components
})
export class AppModule {}