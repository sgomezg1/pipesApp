import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [PrimeNgModule],
  exports: [MenuComponent],
})
export class SharedModule {}
