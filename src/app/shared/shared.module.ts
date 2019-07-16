import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './pipe/name.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectiveWithInputDirective } from './directives/directive-with-input.directive';
import { MyIfDirective } from './directives/my-if.directive';

@NgModule({
  declarations: [NamePipe,HighlightDirective, DirectiveWithInputDirective, MyIfDirective],
  imports: [
    CommonModule
  ],
  exports:[NamePipe,HighlightDirective,DirectiveWithInputDirective,MyIfDirective]
})
export class SharedModule { }
