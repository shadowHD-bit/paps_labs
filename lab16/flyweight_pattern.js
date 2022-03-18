 
const CreateStrategyClass = require('./CreateStrategy')

  const CreateStrategy = new CreateStrategyClass()
  
  const strategyOne = CreateStrategy.createStrategy('Пригласи друга', 5)
  const strategyTwo = CreateStrategy.createStrategy('Семейное лечение', 10)
  const strategyThree = CreateStrategy.createStrategy('Новый клиент', 5)
  const strategyFour = CreateStrategy.createStrategy('Семейное лечение', 5)
  
  console.log(strategyOne)
  console.log(strategyTwo)
  console.log(strategyThree)
  console.log(strategyFour)

  console.log(strategyTwo === strategyFour)

  console.log('\nСписок добавлленных стратегий:')
  console.log(CreateStrategy.getListStrategy())