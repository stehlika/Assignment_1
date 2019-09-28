class Basics{
    constructor(place,time,type,unit){
        this.place = place;
        this.time=  time;
        this.type = type;
        this.unit = unit;
    }
    place() {
        return this.place;}
    time(){
        return this.time;}
    type() {return this.type}
    unit() {return this.unit}

}
class EXC2 extends Basics {
    constructor(place,time,type,unit,value){
        super(place,time,type,unit)
        this.value = value;
    }
    value() { return this.value};
}
class CloudCoverage extends EXC2{
    constructor(place,time,unit,value){
        super(place,time,"cloud coverage",unit,value)
    }
}
class Wind extends EXC2{
    constructor(place,time,unit,value,direction){
        super(place,time,"wind",unit,value)
        this.direction = direction
    }
    //Some if statements to check if I am not in the MPH already
    convertToMPH() {
        this.value = this.value * 50;
        this.unit = "MPH";
    }
    convertToMS() {
        this.value = this.value /50;
        this.unit = "MS";
    }
    direction() {
        return this.direction;
    }

}
class Precipitation extends EXC2{
    constructor(place,time,unit,value){
        super(place,time,"precipitation",unit,value,percType)
        this.percType = percType
    }
    precipitationType(){
        return this.percType;
    }
    //Again some condition to check in which unit we currently are
    convertToInches(){
        this.value = this.value /2.54;
        this.unit = "IN";
    }
    convertToMM(){
        this.value = this.value *2.54;
        this.unit = "MM";
    }
}

class Temperature extends EXC2{
    constructor(place,time,unit,value){
        super(place,time,"temperature",unit,value)
    }
    //Again some condition to check in which unit we currently are
    convertToC(){
        this.value = this.value*100;
        this.unit = "C";
    }
    convertToF(){
        this.value = this.value/100;
        this.unit = "F";
    }
}
class WeatherHistory {
    constructor(weatherData){
        this.weatherReport = weatherData;
    }
    getCurrentPlace(){
        return this.weatherReport[this.weatherReport.length-1].place;
    }
    setCurrentPlace(where){
        this.weatherReport[this.weatherReport.length-1].place = where;
    }
    clearCurrentPlace(){
        this.weatherReport[this.weatherReport.length-1].place = null;
    }
    //Same as Place goes with type and period.
    convertToUsUnits(){
        switch (this.weatherReport[0].type) {
            case "temperature" : {
                this.weatherReport[0].convertToF();
                return console.log("converting temperature");
            }
            case "wind" : return console.log("converting wind");
            case "precipitation" : return console.log("converting precipitation");
            case "cloud coverage" : return console.log("converting coverage");
            default : return console.log("Do not know what to convert");
        }
    }
    //Convert to international units  () => { the same as above but reversed}
    add(dataToAdd){
        this.weatherReport.push(dataToAdd);
    }
    data(){
        var i = 1;
        this.weatherReport.forEach((item)=>{
            console.log("Index : "+i+ " Type of data : "+item.type
                +" place : "+item.place
                +" time : "+item.time
                +" value : " +item.value +item.unit);
            i++;
        })
    }

}

/**
 * Not really sure what this class is supposed to accomplish since
 * the uml does not really show any quantitative relation to WeatherData
 * yet the class uses WeatherData in the method matches()
 */
class WeatherPrediction extends Basics{
    constructor(place,time,type,unit){
        super(place,time,type,unit)
    }
    matches(data) {
        //Lazy way... if there was a different order of the attributes, this method returns false
        //even if the attributes were equal
        return JSON.stringify(this) === JSON.stringify(data)
    }

    to() {
        return -1
    }

    from() {
        return -1
    }
}


class TemperaturePrediction extends  WeatherPrediction {
    constructor(place, time, unit) {
        super(place, time, "Temperature", unit)
    }
    //Again some condition to check in which unit we currently are
    convertToC(){
        this.value = this.value*100;
        this.unit = "C";
    }
    convertToF(){
        this.value = this.value/100;
        this.unit = "F";
    }
}

class PrecipitationPrediction extends  WeatherPrediction {
    constructor(place, time, unit) {
        super(place, time, "Precipitation", unit)
    }

    types() {
        console.log("Returning types")
    }

    matches(data) {
        //Lazy way... if there was a different order of the attributes, this method returns false
        //even if the attributes were equal
        return JSON.stringify(this) === JSON.stringify(data)
    }

    //Again some condition to check in which unit we currently are
    convertToInches(){
        this.value = this.value /2.54;
        this.unit = "IN";
    }
    convertToMM(){
        this.value = this.value *2.54;
        this.unit = "MM";
    }
}

class WindPrediction extends  WeatherPrediction {
    constructor(place, time, unit) {
        super(place, time, "Wind", unit)
    }

    directions() {
        console.log("Returning directions")
    }

    matches(data) {
        //Lazy way... if there was a different order of the attributes, this method returns false
        //even if the attributes were equal
        return JSON.stringify(this) === JSON.stringify(data)
    }

    //Some if statements to check if I am not in the MPH already
    convertToMPH() {
        this.value = this.value * 50;
        this.unit = "MPH";
    }
    convertToMS() {
        this.value = this.value /50;
        this.unit = "MS";
    }
}

class CloudCoveragePrediction extends WeatherPrediction {
    constructor(place, time, unit) {
        super(place, time, "CloudCoverage", unit)
    }
}

class WeatherForecast{
    constructor(weatherData){
        this.weatherReport = weatherData;
    }
    getCurrentPlace(){
        return this.weatherReport[this.weatherReport.length-1].place;
    }
    setCurrentPlace(where){
        this.weatherReport[this.weatherReport.length-1].place = where;
    }
    clearCurrentPlace(){
        this.weatherReport[this.weatherReport.length-1].place = null;
    }
    //Same as Place goes with type and period.
    convertToUsUnits(){
        switch (this.weatherReport[0].type) {
            case "temperature" : {
                this.weatherReport[0].convertToF();
                return console.log("converting temperature");
            }
            case "wind" : return console.log("converting wind");
            case "precipitation" : return console.log("converting precipitation");
            case "cloud coverage" : return console.log("converting coverage");
            default : return console.log("Do not know what to convert");
        }
    }
    //Convert to international units  () => { the same as above but reversed}
    add(dataToAdd){
        this.weatherReport.push(dataToAdd);
    }
    data(){
        var i = 1;
        this.weatherReport.forEach((item)=>{
            console.log("Index : "+i+ " Type of data : "+item.type
                +" place : "+item.place
                +" time : "+item.time
                +" value : " +item.value +item.unit);
            i++;
        })
    }

}

class DateInterval {
    constructor(from, to)  {
        this.from = from
        this.to = to
    }

    from() { return this.from }
    to() { return this.to }

    contains(date) {
        return date < this.to && date > this.from
    }
}



var data = new Wind("horsens","dneska","mm","500","dozadu");
var data2 = new Temperature("konov","vcera","C","-57");

var collection = new WeatherHistory([data,data2]);
console.log(collection.getCurrentPlace());
collection.convertToUsUnits();
collection.add(new Temperature("Aarhus","tot kedy","F","11"));
collection.data();

var pred = new WeatherPrediction("here","minule","dazd",50);
var pred2 = new WeatherPrediction("there","tot kedy", "sneh",50);
console.log(pred.matches(pred2));