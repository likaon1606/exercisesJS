function fibonacci(limit) {

    const sucession = [0,1]
    let lastIndex = 1

    while ( sucession[lastIndex] <= limit ){
        const nextValue = sucession[lastIndex] + sucession[lastIndex-1]
        sucession.push(nextValue)
        lastIndex++
    }return sucession

}
console.log(fibonacci(7))