import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './views/shared/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './views/shared/pagination/pagination.component';
import { PaginatorModule } from 'primeng/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoryTypeComponent } from './views/dashboard/category-type/category-type.component';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryDetailComponent } from './views/dashboard/category-detail/category-detail.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbComponent,
    PaginationComponent,
    CategoryTypeComponent,
    CategoryDetailComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    PaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  exports: [MatMenuModule, MatButtonModule, MatTableModule, MatCardModule, PaginatorModule, FormsModule, MatChipsModule, MatAutocompleteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
