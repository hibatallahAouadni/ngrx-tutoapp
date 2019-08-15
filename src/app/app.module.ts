import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* NGRX libaries */
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

/* Table libaries */
import { TableHttpExample } from './table-http-example/table-http-example';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    StoreModule.forRoot({ count: counterReducer })
    ],
  declarations: [ AppComponent, MyCounterComponent, TableHttpExample ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/