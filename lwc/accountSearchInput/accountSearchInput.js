import { LightningElement } from 'lwc';

export default class AccountSearchInput extends LightningElement {
    handleChange(event){
        const searchText=event.target.value;
        console.log('Entered Text in account input; '+searchText);
        //define the custom event to transfer the account name input to account search result component
        const eventRef= new CustomEvent('search',{detail:searchText});
        this.dispatchEvent(eventRef);
    }
}