const handleIntent = (intent) => {
  if (!intent.action){
    throw new Error("No intent action provided");
  }
  switch (intent.action){
    case 'create_order':
      console.log('create order... ')
      console.log(intent)

    default:
      console.error('On recognized intent')
      console.log(intent)
  }
}

export {handleIntent}