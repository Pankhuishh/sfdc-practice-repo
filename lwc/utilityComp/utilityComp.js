import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const _toastMsg= function(thisArg, title, message, variant){
    const eventRef = new ShowToastEvent({title,message,variant});
    thisArg.dispatchEvent(eventRef);
}
export{
    _toastMsg
}