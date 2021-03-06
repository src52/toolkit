import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileIndexComponent } from './file-index.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FileNameModule } from '../../../shared/file-name/file-name.module';
import { IndexNameModule } from '../../../shared/index-name/index-name.module';
import { FileModule } from '../../../shared/file/file.module';
import { IndexNamePipe } from '../../../shared/index-name/index-name.pipe';
import { FolderModule } from '../../../shared/folder/folder.module';


@NgModule({
    declarations: [ FileIndexComponent ],
    imports: [
        CommonModule,
        RouterModule,
        MatDividerModule,
        MatIconModule,
        FileNameModule,
        IndexNameModule,
        FileModule,
        FolderModule
    ],
    providers: [
        IndexNamePipe
    ]
})
export class FileIndexModule {
}
