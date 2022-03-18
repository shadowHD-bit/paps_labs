const StrategyClass = require('./Strategy')

class CreateStrategy {
    constructor() {
      this.strategys = []
    }
  
    createStrategy(name, discount) {
      const candidate = this.getStrategyName(name)
      if (candidate) {
        return candidate
      }
  
      const newStrategy = new StrategyClass(name, discount)
      this.strategys.push(newStrategy)
      return newStrategy
    }
  
    getStrategyName(name) {
      return this.strategys.find(startegyGet => startegyGet.name === name)
    }


    getListStrategy(){
      return this.strategys
    }
  }


  module.exports = CreateStrategy