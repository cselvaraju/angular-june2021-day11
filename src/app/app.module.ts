import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { DishService } from "./services/dish.service";
import { PostService } from "./services/post.service";

import { AppComponent } from './app.component';
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { SiblingComponent } from "./components/sibling/sibling.component";
import { PipedemoComponent } from "./components/pipedemo/pipedemo.component";
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { TruncatetextPipe } from './pipes/truncatetext.pipe';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    PipedemoComponent,
    ReversetextPipe,
    TruncatetextPipe,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DishService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
