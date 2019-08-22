import {Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'child-counter',
    template: `
                <h2>Child Counter</h2>
                current count is {{count}}
                <select (change)="change()">
                    <option *ngFor="let option of options; trackBy: trackByFunction" [value]="option.id">
                        {{option.name}}
                    </option>
                </select>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildCounterComponent{
    
    @Input() options = [];
    count: number=0;
    change(){}
    increment(){
        this.count++;
    }
    decrement(){
        if(this.count == 0){
            this.count = 0;
        }
        else{
            this.count--;
        }
    }
    public trackByFunction(index, item){
        if(!item){
            return null;
        }
        return item.name;
    }
}