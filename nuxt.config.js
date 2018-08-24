let counter = 0
let x = setInterval(() => {
    counter++
    //console.log('Message ' + counter)
    process.stdout.write('Message ' + counter + '\n')
}, 1000)

export default {}
