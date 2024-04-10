const secureBooking = function () {
  let passengerCount = 0
  console.log('passengercount', passengerCount)
  return function () {
    passengerCount++
    console.log('passengercount', passengerCount)
  }
}

const recieveBooked = secureBooking()
recieveBooked()
