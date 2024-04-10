import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-black mt-32">
      <article className="flex flex-col gap-8 max-w-xs mx-auto mt-20 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl py-32">
        {sent ? (
          <div className="flex flex-col gap-3">
            <h2 className="text-second font-semibold text-xl text-center md:text-2xl">
              Thank you for subscribing to our Newsletter!
            </h2>
            <p className="text-second font-semibold text-center">
              We're excited to have you as part of our community.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-primary text-center md:text-2xl">
              Subscribe To our Newsletter!
            </h2>
            <form
              className="flex flex-col gap-4 justify-center md:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email..."
                className="p-2 rounded-md outline-none md:w-2/3 lg:w-1/2"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-third text-primary text-lg font-semibold px-3 py-1 rounded transition ease hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </>
        )}
      </article>
    </section>
  );
};

export default NewsLetter;
