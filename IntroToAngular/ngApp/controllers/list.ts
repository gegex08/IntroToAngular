namespace IntroToAngular.Controllers {

    export let contacts = [
        { firstName: 'Larry', lastName: 'Joe', phoneNumber: '123-456-7890' },
        { firstName: 'Frank', lastName: 'Joe', phoneNumber: '123-456-7890' },
        { firstName: 'Bob', lastName: 'Joe', phoneNumber: '123-456-7890' },
        { firstName: 'Eric', lastName: 'Siebeneich', phoneNumber: '123-456-7890' },
        { firstName: 'Harry', lastName: 'Joe', phoneNumber: '123-456-7890' },
    ];

    export class ListController {

        get jelly() {
            return IntroToAngular.Controllers.contacts;
        }
    }
}