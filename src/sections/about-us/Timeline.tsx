import { Particles } from "../../utility/Particles";

export default function Timeline() {
  return (
    <section className="relative">
      <Particles className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] h1 text-3xl lg:text-4xl bg-clip-text text-white pb-6 font-poppins">
              Bringing the world's ideas to life
            </h2>
            <p className="text-lg text-indigo-200/65">
              We were frustrated because social networks hadn't innovated, so we
              sat down and drew up what we thought a new social network could look
              like.
            </p>
          </div>
          {/* Items */}
          <div
            className="-my-4 mx-auto max-w-3xl md:-my-6"
            data-aos-id-timeline=""
          >
            {/* 1st item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-slate-300 via-slate-50 to-slate-400 bg-clip-text pb-2 text-transparent">
                  The seed
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-slate-500/25 px-2.5 py-0.5 text-sm font-semibold text-white">
                    2024
                  </div>
                  {/* <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  /> */}
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-white"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Socigy was founded in Prague, Czechia
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  We started our journey to make the world of Social Networks
                  new and innovative with our network Socigy
                </p>
              </div>
            </div>
            {/* 2nd item */}
            {/* <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-primary-purple via-primary-red to-primary-yellow bg-clip-text pb-2 text-transparent">
                  New features
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-slate-500/25 px-2.5 py-0.5 text-sm font-semibold text-white">
                    2025
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-primary-red"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Launched the first Open PRO Advanced plan
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div> */}
            {/* 3rd item */}
            {/* <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-primary-purple via-primary-red to-primary-yellow bg-clip-text pb-2 text-transparent">
                  Pivoting
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-slate-500/25 px-2.5 py-0.5 text-sm font-semibold text-white">
                    2026
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-primary-red"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Transitioned to a SaaS business model
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div> */}
            {/* 4th item */}
            {/* <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-primary-purple via-primary-red to-primary-yellow bg-clip-text pb-2 text-transparent">
                  Huge milestone
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-slate-500/25 px-2.5 py-0.5 text-sm font-semibold text-white">
                    2027
                  </div>
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-primary-red"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    1 million happy customers
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
