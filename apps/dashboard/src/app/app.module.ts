import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CidadesComponent } from './cidades/cidades.component';
import { CidadesListComponent } from './cidades/cidades-list/cidades-list.component';
import { CidadesDetailsComponent } from './cidades/cidades-details/cidades-details.component';
import { MaterialModule } from '@cidades/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@cidades/core-data';


@NgModule({
  declarations: [AppComponent, CidadesComponent, CidadesListComponent, CidadesDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
