window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
// Remname json
  let rideData = json
  
  //Create loop to go through rideData array
  for (let i=0; i < rideData.length; i++){
  //Create element that pulls individual parts of the array
    let rideInfo = rideData[i]
    let nooberType 
  //Create if statement element that creates logic for car type selected
  //Purple overrides everything, if there are more than three passengers Noober XL is needed
  //anything 3 or below is Noober X
    if(rideInfo.purpleRequested == true) {
      nooberType = `Purple`
    } else if (rideInfo.numberOfPassengers > 3) {
      nooberType = `Noober XL`
    } else {
      nooberType = `Noober X`
    }
//select proper div of HTML
    let rideElement = document.querySelector(`.rides`)
//paste HTML to append and insert appropriate objects
    rideElement.insertAdjacentHTML(`beforeend`,`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${nooberType}</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${rideInfo.passengerDetails.first} ${rideInfo.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${rideInfo.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${rideInfo.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${rideInfo.pickupLocation.address}</p>
        <p>${rideInfo.pickupLocation.city}, ${rideInfo.pickupLocation.state} ${rideInfo.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${rideInfo.dropoffLocation.address}</p>
        <p>${rideInfo.dropoffLocation.city}, ${rideInfo.dropoffLocation.state} ${rideInfo.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>    
    `)
  //Delete portion of original HTML!
    
  }

})