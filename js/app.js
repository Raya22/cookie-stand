'use strict';


let Time = [' 6am', ' 7am', ' 8am', ' 9am', ' 10am', ' 11am', ' 12pm', ' 1pm', ' 2pm', ' 3pm', ' 4pm', ' 5pm', ' 6pm', ' 7pm'];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}





function Shop(location,MinCust,MaxCust,AvgCookieSale){
  this.location=location;
  this.MinCust=MinCust;
  this.MaxCust;
  this.AvgCookieSale=AvgCookieSale;
  this.SalesPerHour=[];
  this.TotalSales=0;
  this.RandomSaleAmount= 0;
  this.SalesPerHour.push[this];
}

Shop.prototype.getCustNumber=function() {
  this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
  console.log(this.RandomSaleAmount);
  return this.RandomSaleAmount;
};


Shop.prototype.DailySailesPerHour=function () {
  for (let i = 0; i < Time.length; i++) {
    let RandomSalesNumber = Math.ceil(this.getCustNumber());
    this.SalesPerHour.push(RandomSalesNumber);
    this.TotalSales += RandomSalesNumber;

  }

};


Shop.prototype.render=function () {
  let parentElement = document.getElementById('cookies');
  let h2Element = document.createElement('h2');
  h2Element.textContent = (Shop.location);
  parentElement.appendChild(h2Element);

  let table = document.createElement('table');
  parentElement.appendChild(table);

  for (let i = 0; i < Time.length; i++) {
    let TableRow = document.createElement('th');
    TableRow.textContent =Time[i];
    table.appendChild(TableRow);
  

  }
  let ceties=[' Seattel ','Tokyo','Dubai','Paris','Lima'];

  

  for (let i = 0; i < ceties.length; i++) {
    let TableRow = document.createElement('tr');
    TableRow.textContent = ceties[i];
    table.appendChild(TableRow);
  }

  for (let i = 0; i < Time.length; i++) {
    let TabelBody=document.createElement('tbody');
    TabelBody.textContent(TableRow);
    table.appendChild(TabelBody);

    let Tablecol = document.createElement('td');
    Tablecol.textContent = this.SalesPerHour[i] + ' cookies';
    table.appendChild(Tablecol);
  }


  let Tablefooter = document.createElement('tfoot');
  Tablefooter.textContent = ' Total ' + this.TotalSales;
  table.appendChild(Tablefooter);
};

let SeattelShop=new Shop('Seattle',3,9,2);
//SeattelShop.DailySailesPerHour();
SeattelShop.render();

let TokyoShop=new Shop('Tokyo',3,9,2);
//TokyoShop.DailySailesPerHour();
TokyoShop.render();

let DubaiShop=new Shop('Dubai',3,9,2);
//DubaiShop.DailySailesPerHour();
DubaiShop.render();

let ParisShop=new Shop('Paris',3,9,2);
//ParisShop.DailySailesPerHour();
ParisShop.render();

let LimaShop=new Shop('Lima',3,9,2);
//LimaShop.DailySailesPerHour();
LimaShop.render();


