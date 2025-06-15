import React from 'react'


function Service() {

  const services = [
  {
    title: "Accounting and Analysis",
    description:
      "We've designed and built ecommerce experiences that have driven sales.",
    color: "bg-yellow-100",
  },
  {
    title: "Finance and Banking",
    description:
      "The ability to independently value an enterprise is an essential tool for making business and strategic decisions.",
    color: "bg-green-100",
  },
  {
    title: "Strategic Business Leader",
    description:
      "Strategic Business Leader is a training course from the Strategic Professional level.",
    color: "bg-red-100",
  },
  {
    title: "Preparatory Course",
    description:
      "The ability to independently value an enterprise is an essential tool for making business and strategic decisions.",
    color: "bg-rose-200",
  },
  {
    title: "Business English Writing Skills",
    description:
      "A unique opportunity to gain guidance and feedback from our expert.",
    color: "bg-yellow-100",
  },
  {
    title: "Strategic Business Reporting",
    description:
      "Strategic Business Reporting is a Professional level training course. It covers topics related to advanced financial reporting, including leasing.",
    color: "bg-green-100",
  },
];

  return (
      <div className="py-16 px-4 max-w-6xl mx-auto text-center"  data-aos="zoom-in" data-aos-duration="1000">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2">Services we provide</h2>
        <p className="text-gray-500">
          We specialise in organising professional training courses.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg text-left shadow ${service.color}`}
          >
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <button className="bg-white text-black font-medium px-4 py-2 rounded shadow hover:bg-gray-100 transition">
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Service
