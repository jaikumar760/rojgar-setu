export default function Services({ services }) {

  //displays a list of services in a grid layout.
  const handleClick = (serviceName) => {
    // Open new tab and pass service name as query param
    const url = `/book?service=${encodeURIComponent(serviceName)}`;
    window.open(url, "_blank"); // opens in a new tab
  };

  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map(service => (
          <div
            key={service.id}
            className="card"
            onClick={() => handleClick(service.name)}
          >
            <h3>{service.emoji} {service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
