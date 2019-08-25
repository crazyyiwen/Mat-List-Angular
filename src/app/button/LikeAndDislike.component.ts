import {Component} from '@angular/core';

@Component({
    selector: 'app-likeanddislike',
    templateUrl: './LikeAndDislike.component.html'
})

export class LikeAnddislikeComponent{
    numberOfLikes: number = 0;

    likeButtonClick(){
        this.numberOfLikes++;
    }
    dislikeButtonClick(){
        this.numberOfLikes--;
    }
}