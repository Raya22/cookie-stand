'use strict';


let Time =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


let SeattleShop = {
    location : 'Seattle',
    MinCust : 23,
    MaxCust : 65,
    AvgCookieSale :6.3,
    TotalSales :0,
    SalesPerHour : [],
    RandomSaleAmount :0;
    getCustNumber : function(min,max){
    this.RandomSaleAmount=getRandomNumber(this.MinCust,this.MaxCust) *AvgCookieSale;
    }
}


let TokyoShop = {
    location : 'Tokyo',
    MinCust : 3,
    MaxCust : 24,
    AvgCookieSale : 1.2,
    TotalSales :0,
    SalesPerHour : [],
    RandomSaleAmount :0;
    getCustNumber : function(min,max){
        this.RandomSaleAmount=getRandomNumber(this.MinCust,this.MaxCust)*AvgCookieSale; 
        }
}

let DubaiShop = {
    location : 'Dubai',
    MinCust : 11,
    MaxCust : 38,
    AvgCookieSale : 3.7,
    TotalSales :0,
    SalesPerHour : [],
    RandomSaleAmount :0;
    getCustNumber : function(min,max){
        this.RandomSaleAmount=getRandomNumber(this.MinCust,this.MaxCust) *AvgCookieSale;
        }
}


let ParisShop = {
    location : 'Paris',
    MinCust : 20,
    MaxCust : 38,
    AvgCookieSale : 2.3,
    TotalSales :0,
    SalesPerHour : [],
    RandomSaleAmount :0;
    getCustNumber : function(min,max){
        this.RandomSaleAmount=getRandomNumber(this.MinCust,this.MaxCust) *AvgCookieSale;
        }
}


let LimaShop = {
    location : 'Lima',
    MinCust : 2,
    MaxCust : 16,
    AvgCookieSale : 4.6,
    TotalSales :0,
    SalesPerHour : [],
    RandomSaleAmount :0;
    getCustNumber : function(min,max){
        this.RandomSaleAmount=getRandomNumber(this.MinCust,this.MaxCust) *AvgCookieSale;
        }
}
