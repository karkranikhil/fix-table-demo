import { LightningElement, api } from 'lwc';

export default class ScrollableRow extends LightningElement {
    _col
    @api row 
    @api 
    get col(){
        return this._col;
    }
    set col(value){
        console.log("value", value)
        this._col = value;
    }




    get rowValue(){
        return this.row[this.col?.fieldName]
    }

    get isTypeAction(){
        console.log("this.col?.type ", this.col?.type )
        return this.col?.type === 'action'
    }

    get actionList(){
          return this.isTypeAction ? this.col.typeAttributes?.rowActions:''
    }
}