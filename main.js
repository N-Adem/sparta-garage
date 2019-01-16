//|===================|Object Literal|==============|
const carLit = {
    name: "Audi",
    type: "A 1",
    seats: 4,
    car: function() {
    return `${this.name} is the name of the car while ${this.type} 
        is the model number and it has ${this.seats} seats`  
    }
};

//|===================|Function Constructor|==============|
function Car(seats, color, engineSize, lights) {
    this.seats = seats;
    this.color = color;
    this.engineSize = engineSize;
    this.lights = lights;

  }
  //|===================|Garage project|==============|
  let orderArray=[];
  let orderReady = false;
  let orderComplete = false;
  let orderSeat, orderColor, orderEngineSize,orderLights;
  //|===================|Class|==============|
  class CarDelivery{    
    constructor(customerName,deliveryAddress,recieptNumber,carModel){
        this.customerName = customerName;
        this.deliveryAddress = deliveryAddress;
        this.recieptNumber = recieptNumber;
        this.carModel = carModel;
    }

    carbuilder(checkReady){
        let check = checkReady;
       while(check  == true)
       {
            alert("Order manager is loading ....")
            orderSeat = prompt("please enter the amount of seats");
            orderEngineSize = prompt("please enter the engine size");
            orderColor = prompt("please enter the car color");
            orderLights = prompt("please enter the colour for the lights");
            var newCar = new Car(orderSeat,orderColor,orderEngineSize,orderLights);
            console.log(newCar);
            break;
       }
    }
}

var orderOne = new CarDelivery("Billy Jones", "4 wealthy street, income avenue", 02565634, "blue lights");
let car1 = new CarDelivery();
let beginOrder = prompt("Begin your order now yes/no");

if(beginOrder == "yes"){
    alert("registered");
    orderReady = true;
    orderOne.carbuilder(orderReady);
    console.log(orderOne);
}

