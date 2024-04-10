import React from 'react';
import adidasLogo from '../../assets/adidas.png';
import nikeLogo from '../../assets/nike.png';
import underArmorLogo from '../../assets/underArmor.png';
import vansLogo from '../../assets/vans.png';

const Brands = () => {
  return (
    <section className="mt-32">
      <article className="flex flex-col gap-4 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-2xl mb-4">Trusted Partners</h2>
        <div className="flex flex-col gap-6 items-center md:grid md:grid-cols-2 lg:flex lg:flex-row">
          <figure className="w-[300px] h-auto">
            <img
              src={adidasLogo}
              alt="Adidas Logo"
              loading="lazy"
              className="w-full"
            />
          </figure>
          <figure className="w-[300px] h-auto">
            <img
              src={nikeLogo}
              alt="Nike Logo"
              loading="lazy"
              className="w-full"
            />
          </figure>
          <figure className="w-[300px] h-auto">
            <img
              src={underArmorLogo}
              alt="Under Armor Logo"
              loading="lazy"
              className="w-full"
            />
          </figure>
          <figure className="w-[300px] h-auto">
            <img
              src={vansLogo}
              alt="Vans Logo"
              loading="lazy"
              className="w-full"
            />
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Brands;
