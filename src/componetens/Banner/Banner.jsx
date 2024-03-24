const Banner = () => {
  return (
    <div className="hero bg-[#FFFFFF]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src='../../assets/logo/google.png'
          className="rounded-lg shadow-2xl"
        />
        <div>
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
