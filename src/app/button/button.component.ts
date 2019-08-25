import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit{
    isLinear: false;
    toggle: string='';
    determine: boolean = false;
    showSpinner: boolean = false;
    opened: boolean = false;
    options: string[] = ['C', 'C++', 'C#'];
    objoptions = [
        {name: 'C'},
        {name: 'C++'},
        {name: 'C#'},
        {name: 'TypeScript'}
    ];
    mycontrol: FormControl = new FormControl();
    filteredoptions: Observable<string[]>;
    ngOnInit(){
        this.filteredoptions = this.mycontrol.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }
    private _filter(value:string):string[]{
        const filtervalue = value.toLowerCase();
        return this.options.filter(
            option => option.toLowerCase().includes(filtervalue)
        );
    }
    loadData(){
        this.showSpinner = true;
        setTimeout(
            () => {
                this.showSpinner = false;
            }, 5000);
    }
    displayFn(subject){
        return subject ? subject.name : undefined;
    }
    togglebutton:{
        
    }
}

