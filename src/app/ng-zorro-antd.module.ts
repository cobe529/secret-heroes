import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuOutline, CloseOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ MenuOutline, CloseOutline ];
@NgModule({
  exports: [
    NzListModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
})
export class NgZorroAntdModule {

}
