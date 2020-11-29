import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatTableModule,
  MatMenuModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSnackBarModule,
  MatGridListModule,
  MatRadioModule,
  MatSortModule,
  MatPaginatorModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatListModule,
  MatTabsModule,
  MAT_DIALOG_DATA,  
  MatDialogRef,
  MatTableDataSource,
  MatBadgeModule
 } from '@angular/material';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { routes } from './routes';
import { InvalidLinkComponent } from './components/invalid-link/invalid-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    InvalidLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    MatSortModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatTabsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




