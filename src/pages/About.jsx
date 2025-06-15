import React from 'react'

function About() {

  const stats = [
  { number: "10k+", label: "Completed Projects" },
  { number: "15k", label: "Satisfied Customers" },
  { number: "10k+", label: "Years Of Mastery" },
  { number: "45+", label: "Worldwide Honors" },
];

  return (
       <div className=" text-white shadow-lg py-20 px-4 md:px-8 lg:px-[128px]"  data-aos="zoom-in" data-aos-duration="1000">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-black">About Us</h1>
        <p className="text-black">Home / About Us</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <p className="uppercase text-sm tracking-widest text-black mb-2">Our Story</p>
          <h2 className="text-black text-3xl md:text-4xl font-bold leading-snug mb-6">
            Your Vision Our Expertise Your Success <br />
            Get Noticed Generate <span className="text-red-500">Leads Dominate.</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6  ">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQFXsBivSW8_kw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695827045738?e=2147483647&v=beta&t=jZTCVxezslJLRzt80gp95ZQaaaYTW7kZKl7Oz2AVyqE"
              alt="Team Working"
              className="rounded-lg  h-[300px] object-cover "
            />
            <div className="flex flex-col gap-4 ">
              <img
                src="https://images.pexels.com/photos/19537355/pexels-photo-19537355/free-photo-of-woman-wearing-pink-headscarf-and-holding-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Woman Laptop"
                className="rounded-lg bg-pink-300 h-[150px] object-cover"
              />
              <img
                src="https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg"
                alt="Team Collaboration"
                className="rounded-lg bg-orange-600 h-[135px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-black   mb-6">
            Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nulla. Molestie nunc
            non blandit massa enim nec. Felis bibendum ut tristique et egestas quis ipsum
            suspendisse ultrices. Eros in cursus turpis massa tincidunt dui.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-black">{item.number}</h3>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Avatar Group and Video */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center group-hover:bg-red-500 transition">
                <svg
                  className="w-4 h-4 text-red-500 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-black font-medium">WATCH INTRO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
