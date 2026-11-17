
import React from "react";
import {
  Truck,
  ShieldCheck,
  Headphones,
  Heart,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <ShoppingBag size={28} />,
      title: "Quality Products",
      desc: "We carefully select products that meet our quality standards.",
    },
    {
      icon: <Truck size={28} />,
      title: "Fast Delivery",
      desc: "Get your favorite products delivered right to your doorstep.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Shopping",
      desc: "Your privacy and secure transactions are our priority.",
    },
    {
      icon: <Headphones size={28} />,
      title: "Customer Support",
      desc: "Our team is always ready to help you with your questions.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-5">
              About Our Store
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Shopping Made
              <span className="block text-gray-400">
                Simple & Better.
              </span>
            </h1>

            <p className="text-gray-500 text-lg mt-7 leading-8 max-w-lg">
              We believe shopping should be simple, enjoyable,
              and accessible to everyone. Discover products
              that make your everyday life better.
            </p>

            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition">
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="h-[420px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Our store"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[4px] text-gray-400">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            More Than Just Shopping
          </h2>

          <p className="text-gray-500 text-lg leading-8 mt-7">
            Our journey started with one simple idea:
            making online shopping a better experience.
            We bring together quality, convenience, and
            affordability so you can shop with confidence.
            Every product we offer reflects our commitment
            to delivering value to our customers.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[4px] text-gray-400">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold mt-4">
            The Difference We Make
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition duration-300"
            >
              <div className="mb-6 text-gray-900">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            ["10K+", "Happy Customers"],
            ["500+", "Products"],
            ["5K+", "Orders Delivered"],
            ["100%", "Customer Focus"],
          ].map(([number, label]) => (
            <div key={label}>
              <h3 className="text-4xl md:text-5xl font-bold">
                {number}
              </h3>
              <p className="text-gray-400 mt-3">{label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <Heart className="mx-auto mb-5" size={35} />

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Find Your Favorites?
        </h2>

        <p className="text-gray-500 mt-5">
          Explore our collection and discover something you love.
        </p>

        <button className="mt-8 bg-black text-white px-9 py-4 rounded-full hover:bg-gray-800 transition">
          Start Shopping
        </button>
      </section>

    </div>
  );
};

export default About;
