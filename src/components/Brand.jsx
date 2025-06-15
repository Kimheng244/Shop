import React from 'react'

function Brand() {

    const stores = [
  { name: "Staples", logo: "https://cdn.pixabay.com/photo/2023/09/14/10/27/face-logo-8252748_640.png" },
  { name: "Sprouts", logo: "https://hiverlab.com/wp-content/uploads/2025/01/asus-ai-pc-announcement-ces-2025.jpg" },
  { name: "Grocery Outlet", logo: "https://wallpapercat.com/w/full/8/0/4/82261-2160x3840-iphone-4k-apple-logo-background-image.jpg" },
  { name: "Mollie Stones", logo: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" },
  { name: "Sports Basement", logo: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png" },
  { name: "Container Store", logo: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png" },
  { name: "Target", logo: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png" },
  { name: "Bevmo!", logo: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png" }
];

  return (
      <div className='container flex mx-auto lg:px-[85px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div className="p-5  container">
        <h1 className="text-3xl font-bold ">Available Stores</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stores.map((store, index) => (
            <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
                <img
                src={store.logo}
                alt={store.name}
                className="w-20 h-20 object-cover  rounded-full"
                />
                <h2 className="text-xl font-semibold">{store.name}</h2>
                <p className="text-gray-500">Delivery within 24 hours</p>
            </div>
            ))}
        </div>
      </div>
      </div>
    
  )
}

export default Brand
