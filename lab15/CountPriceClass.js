class CountPriceTreatmentTeeth{
    constructor(discount){
        this.discount = discount
        this.price = 0
    }

    checkNowPrice(){
        return this.discount(this.price)
    }

    setPrice(price){
        this.price = price
    }
}

module.exports = CountPriceTreatmentTeeth