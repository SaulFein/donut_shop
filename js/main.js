'use strict';

var Donutshop = function(locationName, minCustPerHr, maxCustPerHr, avDonutPerCust){
  this.locationName = locationName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avDonutPerCust = avDonutPerCust;
  this.totalDonutsPerDay = [];
  this.sumDonutsPerDay = 0;
}

Donutshop.prototype.getCustPerHr = function() {
  return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
}

Donutshop.prototype.getDonutPerHr = function() {
  return this.avDonutPerCust * this.getCustPerHr();
}

Donutshop.prototype.getDonutsByTheHr = function() {
  for (var i = 0; i < 12; i ++){
    this.totalDonutsPerDay[i] = this.getDonutPerHr();

  }
}

Donutshop.prototype.hourlyTotal = function() {
  for (var i = 0; i < this.totalDonutsPerDay.length; i++){
    this.sumDonutsPerDay += this.totalDonutsPerDay[i];
  }
}

Donutshop.prototype.render = function() {
      // append name
      var table = document.getElementById("donut-table");
      var tableRow = document.createElement("tr");
      tableRow.innerHTML = this.locationName;
      table.appendChild(tableRow);

      // append hrs
      for (var i = 0; i < this.totalDonutsPerDay.length; i++){
        var tableData = document.createElement("td");
        tableData.innerHTML = this.totalDonutsPerDay[i];
        tableRow.appendChild(tableData);
        this.sumDonutsPerDay += this.totalDonutsPerDay[i];
      }

      //append total
      var total = document.createElement("td");
      total.innerHTML = this.sumDonutsPerDay;
      tableRow.appendChild(total);

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



