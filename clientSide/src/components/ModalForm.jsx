import React from "react";

export default function ModalForm({ selectedService, setSelectedService, stateCity, selectedState, setSelectedState, selectedDistrict, setSelectedDistrict, formspreeUrl }) {
  const handleStateChange = (e) => {
    setSelectedState(e.target.value); //When the user changes the state dropdown it updates the selected state.
    setSelectedDistrict("");
  };

  if (!selectedService){
    return null; //If no service is selected modal is hidden
  }

  return (
    <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={() => setSelectedService(null)}>&times;</span>
        <h2>Book a {selectedService.name}</h2>



        <form action={formspreeUrl} method="POST" style={{ display: "flex", flexDirection: "column" }}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="address" type="text" placeholder="Address" required />
          <input name="mobile" type="tel" placeholder="Mobile" required />

          
          <select name="state" required value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {Object.keys(stateCity).map(state => <option key={state} value={state}>{state}</option>)}
          </select>



          <select name="City" required value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)}>
            <option value="">Select City</option>
            {selectedState && stateCity[selectedState].map(d => <option key={d} value={d}>{d}</option>)}
          </select>


          <input name="date" type="date" required />
          <input name="time" type="time" required />
          <input name="service" type="hidden" value={selectedService.name} />
          <button type="submit" className="button">Confirm Booking</button>
        </form>



      </div>
    </div>
  );
}
