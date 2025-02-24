//Topics-04
//getter কি???  কিভাবে কাজ করে???
//getter মানে কোন value get করা।
//setter মানে কোন value set করা। setter এর কাজ হচ্ছে property set করা with value.
 
class product{

    set setPrice(value){
        this.price = value
    }

    get getPrice(){
        return this.price;
    }
}

const productObj = new product()
productObj.setPrice = 500 //in Setter method this kind of parameter pass is prefered not in bracket
console.log(productObj.getPrice);



