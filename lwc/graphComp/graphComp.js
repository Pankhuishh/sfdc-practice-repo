import { LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import ChartJS from '@salesforce/resourceUrl/ChartJS';
export default class GraphComp extends LightningElement {
    isChartJSInitialize=false;
    renderedCallback(){
        if(this.isChartJSInitialize){
            return ;
        }
        this.isChartJSInitialize=true;
        loadScript(this,ChartJS).then(()=>{
            this.initializeChart()
        }).catch((error)=>{
            console.log('Error loading ChartJS:'+error.body.message);
        });
    }
    initializeChart(){
        const ctx=this.template.querySelector('canvas').getContext('2d');
        const chart= new window.Chart(ctx,{
            type:'bar',
            data:{
                labels:['Q1','Q2','Q3','Q4'],
                datasets:[
                    {
                        label:' Revenue For 2025-2026',
                        backgroundColor:['red','green','pink','blue'],
                        data:[4500,1200,6500,7000]
                    }
                ]
            },
            options:
            {
                responsive:true,
                legend:{
                    position:top
                }  
            }
        });
    }
 
}