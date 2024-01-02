class Circle{
    constructor (radius, color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }

    setRadius(newRadius){
        if (typeof newRadius === 'number' && newRadius >= 0) {
            this.radius = newRadius;
        } else {
            console.error('Invalid input');
        }
    }

    getColor(){
        return this.color;
    }

    setColor(newColor){
        if (typeof newColor === 'string') {
            this.color = newColor;
        } else {
            console.error('Invalid input');
        }
    }
    toString(){
        console.log(`Circle [Radius = ${this.radius}, Color = ${this.color}]`);
    }
}

const circle = new Circle(10, "red");

//Printing the radius of the circle
console.log(`Original Radius = ${circle.getRadius()}`);

//Printing the color of the circle
console.log(`Original Color = ${circle.getColor()}`);

//Changing radius and color and printing that
circle.setRadius(20);
circle.setColor("Black");
console.log(`New Radius = ${circle.getRadius()}`);
console.log(`New Color = ${circle.getColor()}`);

//Printing the object as string
circle.toString();