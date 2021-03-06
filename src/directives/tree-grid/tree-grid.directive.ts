import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TreeGridItem } from './tree-grid-item.interface';
import { TreeGridLoadFunction } from './tree-grid-load-function.type';
import { TreeGridService } from './tree-grid.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[uxTreeGrid]',
    providers: [TreeGridService],
    host: {
        class: 'treegrid'
    }
})
export class TreeGridDirective implements OnInit, OnDestroy {
    @Input('uxTreeGrid')
    set data(data: TreeGridItem[]) {
        this._treeGridService.data$.next(data);
    }

    @Input()
    set loadChildren(loadChildren: TreeGridLoadFunction) {
        this._treeGridService.loadChildren = loadChildren;
    }

    @Input()
    rows: TreeGridItem[];

    @Output()
    rowsChange = new EventEmitter<TreeGridItem[]>();

    private _onDestroy = new Subject<void>();

    constructor(private _treeGridService: TreeGridService) {}

    ngOnInit(): void {
        this._treeGridService.rows$.pipe(takeUntil(this._onDestroy)).subscribe(rows => this.rowsChange.emit(rows));
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
}
