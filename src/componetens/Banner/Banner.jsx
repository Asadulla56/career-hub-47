const Banner = () => {
  return (
    <div className="hero mt-10 mb-10 bg-[#FFFFFF] border-2 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
        <img
          src='/public/user.png'
          className="rounded-lg shadow-2xl"
        />
        </div>
        <div className="px-5">
          <h1 className="text-5xl font-bold">
            <span className="text-[#1A1919]">
              One Step <br /> Closer To Your
            </span>
            <br /> <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="py-6 text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-[#7E90FE]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
