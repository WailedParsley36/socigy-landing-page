import TeamImg01 from "../../assets/user-icons/patrik.jpg";
import TeamImg02 from "../../assets/about/vilda.png";
import { Particles } from "../../utility/Particles";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    image: TeamImg01,
    name: "Patrik Stohanzl",
    role: "CEO and Founder",
    linkedIn: "https://www.linkedin.com/in/patrik-stohanzl/"
  },
  {
    image: TeamImg02,
    name: "Vilém Pešek",
    role: "CPO",
    linkedIn: "https://www.linkedin.com/in/vil%C3%A9m-pe%C5%A1ek-144538238/"
  },
];

export default function Team() {
  return (
    <section className="relative">
      <Particles className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              It's all about the people
            </h2>
          </div>
          {/* Members */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-40 text-center md:w-52">
                <Link to={member.linkedIn!}>
                  <div className="relative mb-4 inline-flex before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-indigo-500 before:to-gray-950 before:opacity-15 before:opacity-15">
                    <img
                      className="rounded-full"
                      src={member.image}
                      width={80}
                      height={80}
                      alt={`Team member ${member.name}`}
                    />
                  </div>
                  <div className="mb-1 font-nacelle text-lg text-gray-200">
                    {member.name}
                  </div>
                  <p className="text-sm text-indigo-200/65">{member.role}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
