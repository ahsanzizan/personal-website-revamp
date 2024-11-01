import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Application Development",
    description:
      "I develop responsive and interactive web applications using modern frameworks like React and Next.js. From frontend design to backend integration, I create scalable solutions tailored to your business needs and user experience goals.",
    tags: [
      "Frontend Development",
      "Backend Development",
      "User Interface Design",
      "Content Management Systems",
      "Creative Development",
    ],
  },
  {
    title: "Cross-platform Mobile Application Development",
    description:
      "I build cross-platform mobile applications for both iOS and Android using React Native and Flutter. With a focus on user-friendly design and performance, I ensure seamless integration and consistent functionality across devices.",
    tags: [
      "React Native",
      "Flutter",
      "Mobile UI/UX Design",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Data Analytics",
    description:
      "I provide data analytics services to turn raw data into actionable insights, using tools like Python and SQL for data visualization, statistical analysis, and predictive modeling to inform decision-making.",
    tags: [
      "Data Collection",
      "Data Visualization",
      "Statistical Analysis",
      "Predictive Modeling",
      "Machine Learning",
    ],
  },
];

export default function Home() {
  return (
    <PageContainer>
      <SectionContainer id="hero" className="mb-14">
        <Link href={"/"} className="mb-16 block w-full max-w-full">
          <svg
            width="1194"
            height="131"
            viewBox="0 0 1194 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              d="M89.36 108.3H44.36L37.52 129H0.44L46.7 2.09999H87.38L133.46 129H96.2L89.36 108.3ZM80.54 81.3L66.86 40.26L53.36 81.3H80.54ZM258.539 2.09999V129H223.259V78.06H180.239V129H144.959V2.09999H180.239V49.8H223.259V2.09999H258.539ZM326.608 130.26C311.848 130.26 299.728 126.78 290.248 119.82C280.768 112.74 275.668 102.66 274.948 89.58H312.568C312.928 94.02 314.248 97.26 316.528 99.3C318.808 101.34 321.748 102.36 325.348 102.36C328.588 102.36 331.228 101.58 333.268 100.02C335.428 98.34 336.508 96.06 336.508 93.18C336.508 89.46 334.768 86.58 331.288 84.54C327.808 82.5 322.168 80.22 314.368 77.7C306.088 74.94 299.368 72.3 294.208 69.78C289.168 67.14 284.728 63.36 280.888 58.44C277.168 53.4 275.308 46.86 275.308 38.82C275.308 30.66 277.348 23.7 281.428 17.94C285.508 12.06 291.148 7.62 298.348 4.61999C305.548 1.61999 313.708 0.119996 322.828 0.119996C337.588 0.119996 349.348 3.59999 358.108 10.56C366.988 17.4 371.728 27.06 372.328 39.54H333.988C333.868 35.7 332.668 32.82 330.388 30.9C328.228 28.98 325.408 28.02 321.928 28.02C319.288 28.02 317.128 28.8 315.448 30.36C313.768 31.92 312.928 34.14 312.928 37.02C312.928 39.42 313.828 41.52 315.628 43.32C317.548 45 319.888 46.5 322.648 47.82C325.408 49.02 329.488 50.58 334.888 52.5C342.928 55.26 349.528 58.02 354.688 60.78C359.968 63.42 364.468 67.2 368.188 72.12C372.028 76.92 373.948 83.04 373.948 90.48C373.948 98.04 372.028 104.82 368.188 110.82C364.468 116.82 359.008 121.56 351.808 125.04C344.728 128.52 336.328 130.26 326.608 130.26ZM470.63 108.3H425.63L418.79 129H381.71L427.97 2.09999H468.65L514.73 129H477.47L470.63 108.3ZM461.81 81.3L448.13 40.26L434.63 81.3H461.81ZM643.768 129H608.488L561.508 58.08V129H526.228V2.09999H561.508L608.488 73.92V2.09999H643.768V129ZM702.385 100.38H755.125V129H662.785V102.18L714.985 30.54H662.785V2.09999H755.125V28.92L702.385 100.38ZM809.536 2.09999V129H774.256V2.09999H809.536ZM868.147 100.38H920.887V129H828.547V102.18L880.747 30.54H828.547V2.09999H920.887V28.92L868.147 100.38ZM1020.3 108.3H975.298L968.458 129H931.378L977.638 2.09999H1018.32L1064.4 129H1027.14L1020.3 108.3ZM1011.48 81.3L997.798 40.26L984.298 81.3H1011.48ZM1193.44 129H1158.16L1111.18 58.08V129H1075.9V2.09999H1111.18L1158.16 73.92V2.09999H1193.44V129Z"
              fill="#FAF9F6"
            />
          </svg>
        </Link>
        <div className="flex w-full flex-col-reverse justify-between gap-12 md:flex-row md:items-center md:gap-0">
          <div className="block md:w-1/2">
            <h3 className="mb-4 w-full">
              Software Engineer That Crafts and Brings Ideas to Life
            </h3>
            <Link
              href={"#works"}
              className={buttonVariants({ variant: "secondary" })}
            >
              Selected Projects
            </Link>
          </div>
          <div className="w-full md:w-[45%]">
            <video
              autoPlay
              loop
              muted
              preload="none"
              className="aspect-video size-full w-full rounded-xl object-cover brightness-50 grayscale transition-all duration-500 hover:grayscale-0"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id="about"
        headerInfo={{
          title: "Software Developer & Enthusiastic Student",
          sectionTitle: "About",
          sectionNumber: 1,
        }}
      >
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <Image
            src={"/me.png"}
            alt="Photo of Ahsan Azizan"
            width={320}
            height={620}
            className="aspect-square w-full rounded-xl object-cover brightness-50 grayscale transition-all duration-500 hover:grayscale-0 lg:sticky lg:top-[6em] lg:mb-0 lg:h-full lg:w-1/2 lg:self-start"
          />
          <div className="w-full lg:w-1/2">
            <h3 className="mb-16 leading-[1.3] text-foreground text-opacity-80">
              I&apos;m Ahsan, a student at SMK Telkom Malang. My interest in
              software engineering & data analytics field is fueled by my
              passion for exploring and learning about technology.
            </h3>
            <p className="mb-8 w-full border-b border-foreground pb-24">
              Hey! I’m Ahsan Awadullah Azizan, but just call me Ahsan. I studied
              software engineering at SMK Telkom Sandhy Putra Malang. When I’m
              not coding, you’ll find me lost in a book, googling anything,
              gaming, or cheering for my favorite football team, Tottenham
              Hotspur FC. I’ve helped many people building softwares in many
              forms, spanning from web-application to mobile application.
              <br />
              <br />I started programming at 13, inspired by Dani, with C# as my
              first language for game development in Unity. I realized watching
              tutorials wasn’t enough, so I shifted to a structured approach.
              While I’ve explored Java and JavaScript, my favorite is Python for
              automating tasks. My journey has taught me that real learning
              comes from practice, not just copying code!
            </p>
            <div className="grid grid-cols-3 items-start gap-6">
              <div className="block">
                <h2>3+</h2>
                <p>Years of exp</p>
              </div>
              <div className="block">
                <h2>10+</h2>
                <p>Projects Finished</p>
              </div>
              <div className="block">
                <h2>99+</h2>
                <p>Cats Petted</p>
              </div>
              <div className="block">
                <h2>2M+</h2>
                <p>Lines of Code</p>
              </div>
              <div className="block">
                <h2>0</h2>
                <p>UCL Trophies</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id="works"
        headerInfo={{
          title: "A Curated List of Selected Works",
          sectionTitle: "Works",
          sectionNumber: 2,
        }}
      ></SectionContainer>
      <SectionContainer
        id="services"
        headerInfo={{
          title: "Capabilities, Skills, and Areas of Expertise",
          sectionTitle: "Services",
          sectionNumber: 3,
        }}
      >
        <div className="flex flex-col divide-y divide-foreground">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-24 py-16 md:grid-cols-2"
            >
              <h1 className="display hidden text-foreground text-opacity-60 md:inline-block">
                0{index + 1}
              </h1>
              <div className="block">
                <h3 className="mb-8">{service.title}</h3>
                <p className="mb-20">{service.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {service.tags.map((tag, index) => (
                    <p className="tag" key={index}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
