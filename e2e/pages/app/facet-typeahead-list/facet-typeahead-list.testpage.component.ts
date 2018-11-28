import { Component } from '@angular/core';
import { Facet } from '@ux-aspects/ux-aspects';
import 'chance';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: 'facet-typeahead-list-app',
    templateUrl: './facet-typeahead-list.testpage.component.html'
})
export class FacetTypeaheadListPageComponent {

    facets: Observable<Facet[]>;
    suggestions: Facet[] = [];
    query: string = '';

    users: Facet[] = [];

    constructor() {

        // generate random facet data
        for (let idx = 0; idx < 1000; idx++) {
            this.users.push(new Facet(chance.name(), null, chance.integer({ min: 0, max: 100 })));
        }

        // sort the users alphabetically
        this.users.sort((userOne, userTwo) => {
            if (userOne.title < userTwo.title) {
                return -1;
            }

            if (userOne.title > userTwo.title) {
                return 1;
            }

            return 0;
        });

        // present the top 6 items as suggestions
        this.suggestions = this.users.slice(0, 6);

        // Create an observable which can be used for fetching data from server
        this.facets = Observable.create((observer: Observer<Facet[]>) => {

            // simulate server request
            setTimeout(() => {
                // return list of filtered users from "server"
                observer.next(this.users);
            });
        });

    }
}
