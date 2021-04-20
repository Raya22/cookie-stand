'use strict';


let Time = [' 6am', ' 7am', ' 8am', ' 9am', ' 10am', ' 11am', ' 12pm', ' 1pm', ' 2pm', ' 3pm', ' 4pm', ' 5pm', ' 6pm', ' 7pm'];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




let Glo=[];
let storeLocations=[];

function Shop(location,MinCust,MaxCust,AvgCookieSale){
  this.location=location;
  this.MinCust=MinCust;
  this.MaxCust=MaxCust;
  this.AvgCookieSale=AvgCookieSale;
  this.averageCookiesPerHour=[];
  this.SalesPerHour=[];
  this.TotalSales=0;
  this.RandomSaleAmount= 0;
  Glo.push(this);
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

let parentElement = document.getElementById('cookies');
let h2Element = document.createElement('h2');
h2Element.textContent = (Shop.location);
parentElement.appendChild(h2Element);

let table = document.createElement('table');
parentElement.appendChild(table);

function HeaderRow()
{
  let tableRow = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = null;
  table.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (let i = 0; i < Time.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = Time[i];
    tableRow.appendChild(thElement);
    // console.log(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(table);
  table.appendChild(tableRow);
}

Shop.prototype.render=function () {

  let parentElement = document.getElementById('cookies');
  let h2Element = document.createElement('h2');
  h2Element.textContent = (Shop.location);
  parentElement.appendChild(h2Element);

  let table = document.createElement('table');
  parentElement.appendChild(table);
  let trRowName = document.createElement('tr');
  let tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (let i = 0; i < this.SalesPerHour.length; i++) {
    let tdCell = document.createElement('td');
    tdCell.textContent = this.SalesPerHour[i];
    trRowName.appendChild(tdCell);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.TotalSales;
  trRowName.appendChild(tdTotal);
  table.appendChild(trRowName);

};

function Stores () {
  for (let i = 0; i < Glo.length; i++) {
    Glo[i].render();
  }
}

function makeFooterRow() { //eslint-disable-line
  let tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  table.appendChild(tableRow);
  let subTotal = 0;
  for (let i = 0; i < Time.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      subTotal += storeLocations[j].averageCookiesPerHour[i];
    }
    let tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = subTotal;
  tableRow.appendChild(tdElement);
}



let SeattelShop=new Shop('Seattle',23,65,6.3);
SeattelShop.render();

let TokyoShop=new Shop('Tokyo',3,24,1.2);
TokyoShop.render();

let DubaiShop=new Shop('Dubai',11,38,3.7);
DubaiShop.render();

let ParisShop=new Shop('Paris',20,38,2.3);
ParisShop.render();

let LimaShop=new Shop('Lima',2,16,4.6);
LimaShop.render();


console.log(Glo);
