angular.module("counterApp", []).controller("CounterController", function () {
  this.value = 0;
  this.increment = () => {
    this.value += 1;
  };
});
