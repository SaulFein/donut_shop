'use strict';

var Donutshop = function(locationName, minCustPerHr, maxCustPerHr, avDonutPerCust){
  this.locationName = locationName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avDonutPerCust = avDonutPerCust;
  this.totalDonutsPerHr = [];
  this.sumDonutsPerDay = 0;
}

//Gets the random number of customers with each locations min and max customers
Donutshop.prototype.getCustPerHr = function() {
  return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
}


//Gets the amount of donuts sales for a single hour
Donutshop.prototype.getDonutPerHr = function() {
  return this.avDonutPerCust * this.getCustPerHr();
}

//This creates a string and fills in total donuts per day array with the total
//donuts sold each hour.
Donutshop.prototype.getDonutsByTheHr = function() {
  for (var i = 0; i < 12; i ++){
    this.totalDonutsPerHr[i] = this.getDonutPerHr();

  }
}
//This gets the sum of the donut totals in the array
Donutshop.prototype.hourlyTotal = function() {
  for (var i = 0; i < this.totalDonutsPerHr.length; i++){
    this.sumDonutsPerDay += this.totalDonutsPerHr[i];
  }
}

//This method fills in the table
Donutshop.prototype.render = function() {
      // append name
      var table = document.getElementById("donut-table"); //This links to my table in my index.html file
      var tableRow = document.createElement("tr"); //This creates a new table row in my table
      tableRow.innerHTML = this.locationName; //This takes the location name and stages in tableRow variable
      table.appendChild(tableRow);// This puts the location name into the table

      // append hrs
      for (var i = 0; i < this.totalDonutsPerHr.length; i++){
        var tableData = document.createElement("td"); //This creates new table data
        tableData.innerHTML = this.totalDonutsPerHr[i]; //Takes array with donut total per hour and stages in the tableData variable
        tableRow.appendChild(tableData); //Puts tableData into 'cells'
        this.sumDonutsPerDay += this.totalDonutsPerHr[i];
      }

      //append total
      var total = document.createElement("td"); //This creates new talbe data
      total.innerHTML = this.sumDonutsPerDay; //This takes the sumDonutsPerDay and stages it in the var total
      tableRow.appendChild(total);  //puts total into cells

}

var downtown = new Donutshop('Downtown', 8, 43, 4.50);
var capitolHill = new Donutshop('Capitol Hill', 4, 37, 2.00);
var southLakeUnion = new Donutshop('South Lake Union', 9, 23, 6.33);
var wedgewood = new Donutshop('Wedgewood', 2, 28, 1.25);
var ballard = new Donutshop('Ballard', 8, 58, 3.75);
  //downtown.getCustPerHr();
  //console.log(downtown.getCustPerHr());
downtown.getDonutsByTheHr();
capitolHill.getDonutsByTheHr();
southLakeUnion.getDonutsByTheHr();
wedgewood.getDonutsByTheHr();
ballard.getDonutsByTheHr();


downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();

 //downtown.hourlyTotal();
  //console.log(downtown.hourlyTotal());
  //console.log(downtown.getDonutsByTheHr());



