import React from 'react';
import { clients, truck, wallet } from '../../utils/icons';

const About = () => {
  return (
    <section className="mt-32">
      <article className="flex flex-col gap-8 max-w-xs mx-auto mt-20 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-3xl text-center mb-4 md:text-3xl">
          Why Shopi?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-5xl">{clients}</span>
            <h3 className="font-bold text-xl">Clients Sattisfaction</h3>
            <p className="text-sm text-center md:px-28 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              harum provident eum soluta aliquid quia aliquam eveniet voluptatum
              amet cum.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-5xl">{wallet}</span>
            <h3 className="font-bold text-xl">Wallet Friendly</h3>
            <p className="text-sm text-center md:px-28 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              harum provident eum soluta aliquid quia aliquam eveniet voluptatum
              amet cum.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-5xl">{truck}</span>
            <h3 className="font-bold text-xl">Fast Shippments</h3>
            <p className="text-sm text-center md:px-28 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              harum provident eum soluta aliquid quia aliquam eveniet voluptatum
              amet cum.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
