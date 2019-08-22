import {Component, ViewChild} from '@angular/core';
import {ChildCounterComponent} from './counterchild.component';
import {Skill} from './skill';

@Component({
    selector: 'parent-counter',
    template: `
               <h1>{{title}}</h1>
               <button (click)="increment()">Increment</button>
               <button (click)="decrement()">Decrement</button>
               <child-counter [options]="skills"></child-counter>
               <button (click)="trigger()">Trigger change detection</button>
    `
})

export class ParentCounterComponent{
    skills = [new Skill(1, 'JS'), new Skill(2, 'CSS'), new Skill(3, 'Angular')];
    title: string = 'Parent calls an @ViewChild()';
    @ViewChild(ChildCounterComponent, {static: true}) child: ChildCounterComponent;
    increment(){
        this.child.increment();
    }
    decrement(){
        this.child.decrement();
    }
    trigger(){
        
    }
}