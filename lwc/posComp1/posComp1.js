import { LightningElement,wire} from 'lwc';
import getAll from '@salesforce/apex/PositionController.getAll';
export default class PosComp1 extends LightningElement {
    @wire(getAll) positionService;
}