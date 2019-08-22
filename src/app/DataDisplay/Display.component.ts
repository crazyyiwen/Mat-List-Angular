import {Component, OnInit, ViewChild} from '@angular/core';
import Test from '../../assets/data.json';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
    selector: 'app-display',
    templateUrl: './Display.component.html',

})

export class DisplayComponent implements OnInit{
    datadisplay: any[]=[];
    datasource: any;
    displayedColumns: string[] = ['car1', 'car2', 'car3'];
    @ViewChild(MatPaginator, {static: true}) 
    private paginator: MatPaginator;

    constructor(){
        for(let key in Test){
            this.datadisplay.push(Test[key]);
        }
        this.datasource = new MatTableDataSource<any>(this.datadisplay);
    }
    ngOnInit(){
        this.datasource.paginator = this.paginator;  
    }
    applyFilter(filterValue: string) {
        this.datasource.filter = filterValue.trim().toLowerCase();
    }
}