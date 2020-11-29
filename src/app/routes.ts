import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { InvalidLinkComponent } from './components/invalid-link/invalid-link.component';

const routerRoutes: Routes = [
    { path: '', component: SearchFilterComponent },
    { path: '**', component: InvalidLinkComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(routerRoutes);