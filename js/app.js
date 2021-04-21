'use strict';


let Time = [' 6am', ' 7am', ' 8am', ' 9am', ' 10am', ' 11am', ' 12pm', ' 1pm', ' 2pm', ' 3pm', ' 4pm', ' 5pm', ' 6pm', ' 7pm'];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}




let StorArray=[];

function Shop(location,MinCust,MaxCust,AvgCookieSale){
  this.location=location;
  this.MinCust=MinCust;
  this.MaxCust=MaxCust;
  this.AvgCookieSale=AvgCookieSale;
  this.SalesPerHour=[];
  this.DailyTotalSales=0;
  this.RandomSaleAmount= 0;
  StorArray.push(this);
}

Shop.prototype.getCustNumber=function() {
  this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
  return this.RandomSaleAmount;
};


Shop.prototype.DailySailesPerHour=function () {
  for (let i = 0; i < Time.length; i++) {
    let RandomSalesNumber = Math.ceil(this.getCustNumber());

    this.SalesPerHour.push(RandomSalesNumber);
    this.DailyTotalSales += RandomSalesNumber;

  }

};


let parentElement=document.getElementById('cookies');
let Table = document.createElement('table');
parentElement.appendChild(Table);


function heading()
{

  let thead=document.createElement('tr');
  Table.appendChild(thead);

  let th=document.createElement('th');
  thead.appendChild(th);
  th.textContent='location';
  //let td1=document.createElement('td');
  //th.appendChild(td1);
  for(let i=0; i<Time.length;i++){
    let th=document.createElement('th');
    thead.appendChild(th);
    th.textContent=Time[i];
  }
  let th1=document.createElement('th');
  thead.appendChild(th1);
  th1.textContent='Total Daily Location';


}
heading();


function footer()
{

  let footer=document.createElement('tr');
  Table.appendChild(footer);
  let tf =document.createElement('th');

  footer.appendChild(tf);
  tf.textContent='Totals';

  let TotalOfTotal=0;
  for(let i=0; i<Time.length;i++){
    let th1=document.createElement('th');

    let hourlyTotal=0;

    for(let j=0; j<StorArray.length;j++)
    {
      hourlyTotal+=StorArray[j].SalesPerHour[i];
      TotalOfTotal+=StorArray[j].SalesPerHour[i];
    }
    th1.textContent=hourlyTotal;
    footer.appendChild(th1);
  }
  let th1=document.createElement('th');
  footer.appendChild(th1);
  th1.textContent=TotalOfTotal;
}






Shop.prototype.render= function ()
{

  console.log(parentElement);

  let tableRow=document.createElement('tr');
  Table.appendChild(tableRow);

  let td=document.createElement('td');
  tableRow.appendChild(td);
  td.textContent=this.location;

  for(let i=0; i<Time.length;i++){
    let tableCol=document.createElement('td');
    tableCol.textContent=this.SalesPerHour[i];
    tableRow.appendChild(tableCol);
    console.log(this.SalesPerHour);
  }

  let td1=document.createElement('td');
  tableRow.appendChild(td1);
  td1.textContent=this.DailyTotalSales;

};





// table();
let SeattelShop=new Shop('Seattle','23','65','6.3');

SeattelShop.DailySailesPerHour();
SeattelShop.render();


let TokyoShop=new Shop('Tokyo','3','24','1.2');
TokyoShop.DailySailesPerHour();
TokyoShop.render();

let DubaiShop=new Shop('Dubai','11','38','3.7');
DubaiShop.DailySailesPerHour();
DubaiShop.render();

let ParisShop=new Shop('Paris','20','38','2.3');
ParisShop.DailySailesPerHour();
ParisShop.render();


let LimaShop =new Shop('Lima','2','16','4.6');
LimaShop.DailySailesPerHour();
LimaShop.render();
<<<<<<< HEAD
=======

LimaShop.DailySailesPerHour();
LimaShop.render();
>>>>>>> 04f09faabda62bf842ba887aa1556648d5966cc1
footer();

