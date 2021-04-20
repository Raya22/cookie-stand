/* eslint-disable new-cap */
'use strict';


let Time = ['  6am', '  7am', '  8am', '  9am', '  10am', '  11am', '  12pm', '  1pm', '  2pm', '  3pm', '  4pm', '  5pm', '  6pm', '  7pm'];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




function Shop(location,MinCust,MaxCust,AvgCookieSale,SalesPerHour=[]){
  this.location=location;
  this.MinCust=MinCust;
  this.MaxCust;
  this.AvgCookieSale=AvgCookieSale;
  this.SalesPerHour=SalesPerHour;
  this.TotalSales=0;
  this.RandomSaleAmount= 0;
}

Shop.prototype.getCustNumber=function() {
  this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
  console.log(this.RandomSaleAmount);
  return this.RandomSaleAmount;
};

function Shop(location,MinCust,MaxCust,AvgCookieSale,SalesPerHour)
{
  this.location=location;
  this.MinCust=MinCust;
  this.MaxCust=MaxCust;
  this.AvgCookieSale=AvgCookieSale;
  this.SalesPerHour=SalesPerHour;
  this.TotalSales=0;
 

}



Shop.prototype.getCustNumber= function () {
  this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
  //console.log(this.RandomSaleAmount);
  return this.RandomSaleAmount;
};

Shop.prototype.DailySailesPerHour= function () {
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
    TableRow.textContent = Time[i];
    table.appendChild(TableRow);
  

  }
  let ceties=['   Seattel  ','Tokyo','Dubai','Paris','Lima'];

  

  for (let i = 0; i < ceties.length; i++) {
    let TableRow = document.createElement('tr');
    TableRow.textContent = ceties[i];
    table.appendChild(TableRow);
  }

  for (let i = 0; i < Time.length; i++) {
    let TabelBody=document.createElement('tbody');
    TabelBody.textContent(TableRow);
    table.appendChild(TabelBody);

    let Tablecol = document.createElement('tr');
    Tablecol.textContent = this.SalesPerHour[i] + ' cookies';
    table.appendChild(Tablecol);
  }


  let Tablefooter = document.createElement('tfoot');
  Tablefooter.textContent = 'Total ' + this.TotalSales;
  table.appendChild(Tablefooter);
};

};


Shop.prototype.render= function () {
  let parentElement = document.getElementById('cookies');
  let h2Element = document.createElement('h2');
  h2Element.textContent = ('Seattle');
  parentElement.appendChild(h2Element);

  let list = document.createElement('ul');
  parentElement.appendChild(list);

  for (let i = 0; i < Time.length; i++) {
    let ListItem = document.createElement('li');
    ListItem.textContent = Time[i] + ' : ' + this.SalesPerHour[i] + ' cookies';
    list.appendChild(ListItem);
  }
<<<<<<< HEAD
};

SeattleShop.DailySailesPerHour();
SeattleShop.render();



let TokyoShop = {
  location: 'Tokyo',
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  TotalSales: 0,
  SalesPerHour: [],
  RandomSaleAmount: 0,
  getCustNumber: function () {
    this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
    console.log(this.RandomSaleAmount);
    return this.RandomSaleAmount;
  },


  DailySailesPerHour: function () {
    for (let i = 0; i < Time.length; i++) {
      let RandomSalesNumber = Math.ceil(this.getCustNumber());
      this.SalesPerHour.push(RandomSalesNumber);
      this.TotalSales += RandomSalesNumber;

    }
  },

  render: function () {
    let parentElement = document.getElementById('cookies');
    let h2Element = document.createElement('h2');
    h2Element.textContent = ('Tokyo');
    parentElement.appendChild(h2Element);

    let list = document.createElement('ul');
    parentElement.appendChild(list);

    for (let i = 0; i < Time.length; i++) {
      let ListItem = document.createElement('li');
      ListItem.textContent = Time[i] + ' : ' + this.SalesPerHour[i] + ' cookies';
      list.appendChild(ListItem);
    }

    let ListItem = document.createElement('li');
    ListItem.textContent = 'Total ' + this.TotalSales;
    list.appendChild(ListItem);
  }

};
TokyoShop.DailySailesPerHour();
TokyoShop.render();


let DubaiShop = {
  location: 'Dubai',
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  TotalSales: 0,
  SalesPerHour: [],
  RandomSaleAmount: 0,
  getCustNumber: function () {
    this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
    console.log(this.RandomSaleAmount);
    return this.RandomSaleAmount;
  },


  DailySailesPerHour: function () {
    for (let i = 0; i < Time.length; i++) {
      let RandomSalesNumber = Math.ceil(this.getCustNumber());
      this.SalesPerHour.push(RandomSalesNumber);
      this.TotalSales += RandomSalesNumber;

    }
  },


  render: function () {
    let parentElement = document.getElementById('cookies');
    let h2Element = document.createElement('h2');
    h2Element.textContent = ('Dubai');
    parentElement.appendChild(h2Element);

    let list = document.createElement('ul');
    parentElement.appendChild(list);

    for (let i = 0; i < Time.length; i++) {
      let ListItem = document.createElement('li');
      ListItem.textContent = Time[i] + ' : ' + this.SalesPerHour[i] + ' cookies';
      list.appendChild(ListItem);
    }

    let ListItem = document.createElement('li');
    ListItem.textContent = 'Total ' + this.TotalSales;
    list.appendChild(ListItem);
  }


};
DubaiShop.DailySailesPerHour();
DubaiShop.render();


let ParisShop = {
  location: 'Paris',
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  TotalSales: 0,
  SalesPerHour: [],
  RandomSaleAmount: 0,
  getCustNumber: function () {
    this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
    console.log(this.RandomSaleAmount);
    return this.RandomSaleAmount;
  },


  DailySailesPerHour: function () {
    for (let i = 0; i < Time.length; i++) {
      let RandomSalesNumber = Math.ceil(this.getCustNumber());
      this.SalesPerHour.push(RandomSalesNumber);
      this.TotalSales += RandomSalesNumber;

    }
  },


  render: function () {
    let parentElement = document.getElementById('cookies');
    let h2Element = document.createElement('h2');
    h2Element.textContent = ('Paris');
    parentElement.appendChild(h2Element);

    let list = document.createElement('ul');
    parentElement.appendChild(list);

    for (let i = 0; i < Time.length; i++) {
      let ListItem = document.createElement('li');
      ListItem.textContent = Time[i] + ' : ' + this.SalesPerHour[i] + ' cookies';
      list.appendChild(ListItem);
    }

    let ListItem = document.createElement('li');
    ListItem.textContent = 'Total ' + this.TotalSales;
    list.appendChild(ListItem);
  }

=======
>>>>>>> cfa93f297da8af1cc33687c3c929b681c6130ef7

  let ListItem = document.createElement('li');
  ListItem.textContent = 'Total ' + this.TotalSales;
  list.appendChild(ListItem);
};
<<<<<<< HEAD
ParisShop.DailySailesPerHour();
ParisShop.render();


let LimaShop = {
  location: 'Lima',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  TotalSales: 0,
  SalesPerHour: [],
  RandomSaleAmount: 0,
  getCustNumber: function () {
    this.RandomSaleAmount = getRandomNumber(this.MinCust, this.MaxCust) * this.AvgCookieSale;
    console.log(this.RandomSaleAmount);
    return this.RandomSaleAmount;
  },


  DailySailesPerHour: function () {
    for (let i = 0; i < Time.length; i++) {
      let RandomSalesNumber = Math.ceil(this.getCustNumber());
      this.SalesPerHour.push(RandomSalesNumber);
      this.TotalSales += RandomSalesNumber;

    }
  },

  render: function () {
    let parentElement = document.getElementById('cookies');
    let h2Element = document.createElement('h2');
    h2Element.textContent = ('Lima');
    parentElement.appendChild(h2Element);

    let list = document.createElement('ul');
    parentElement.appendChild(list);

    for (let i = 0; i < Time.length; i++) {
      let ListItem = document.createElement('li');
      ListItem.textContent = Time[i] + ' : ' + this.SalesPerHour[i] + ' cookies';
      list.appendChild(ListItem);
    }

    let ListItem = document.createElement('li');
    ListItem.textContent = 'Total ' + this.TotalSales;
    list.appendChild(ListItem);
  }
=======
>>>>>>> cfa93f297da8af1cc33687c3c929b681c6130ef7

//let SSR=new Shop();
//SSR.DailySailesPerHour();
//SSR.render();

<<<<<<< HEAD
};
LimaShop.DailySailesPerHour();
LimaShop.render();
=======
>>>>>>> cfa93f297da8af1cc33687c3c929b681c6130ef7
