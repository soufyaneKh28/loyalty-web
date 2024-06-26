// "use client";

import data from "@/app/content-en";
import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { redirect } from "next/navigation";
import { poppinsClass } from "@/app/font";
import { MetaData } from "next";
import Head from "next/head";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import Form from "@/components/Form";
import Link from "next/link";

// export const generateMetaData = ({ params }): Metadata => {
//   return {
//     title: params.projectTitle,
//   };
// };
export const metadata = {
  title: "project",
  description: "Generated by create next app",
};
// async function getStaticProps({ params }) {
//   console.log("Server-side log:", params.projectId);
//   return {
//     props: {
//       projectId: params.projectId,
//     },
//   };project.title

// }
const Page = ({ params }) => {
  let exist = true;
  metadata.title = `${params.projectTitle.split("-").join(" ")}`;

  console.log("Visual-Identity-Souq-alfurat");

  let projectObj = data.projects[Number(params.projectId) - 1];
  const arrayOfStrings = params.projectTitle.split("-");

  console.log(arrayOfStrings);
  let Title = arrayOfStrings.join(" ");

  console.log(Title);
  if (!projectObj || projectObj.url != params.projectTitle) {
    exist = false;
    redirect(`/en/not-found`);
  }

  return (
    <>
      <main className={` pt-[100px] ${poppinsClass}`}>
        <section className="pt-10 md:pt-20">
          <div className="container">
            {/* {!exist ? null : (
            // <div className=" ">
            //   product title :{params.projectId} {params.projectTitle}{" "}
            //   {`${projectObj.title}`}
            // </div>
            )} */}
            <div>
              <h1 className=" text-center leading-[118%] text-[50px] font-bold text-primaryDark">
                {projectObj.title}
              </h1>

              <div className="project-details my-10 flex justify-center gap-8 md:gap-[5rem]">
                <div className="client flex flex-col items-center justify-center">
                  <h4 className=" text-[#8A8A8A] font-medium text-[15px] text-center ">
                    CLIENT
                  </h4>
                  <h6 className=" text-primaryDark font-semibold text-center">
                    {projectObj.details.client}
                  </h6>
                </div>
                <div className="client flex flex-col items-center ">
                  <h4 className=" text-[#8A8A8A] font-medium text-[15px]">
                    SERVICES
                  </h4>
                  <h6 className=" text-primaryDark font-semibold text-center">
                    {projectObj.details.services}
                  </h6>
                </div>
                <div className="client flex flex-col items-center">
                  <h4 className=" text-[#8A8A8A] font-medium text-[15px]">
                    DURATION
                  </h4>
                  <h6 className=" text-primaryDark font-semibold text-center">
                    {projectObj.details.duration}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="project-images flex justify-end">
            <EmblaCarousel>
              {data.projects[params.projectId - 1].details.images
                ? data.projects[params.projectId - 1].details.images.map(
                    (project, i) => (
                      <div className=" mx-2 ms-[15px] md:ms-[50px] " key={i}>
                        <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                          <Image
                            src={project.img}
                            alt="img"
                            className="w-[100%] h-[100%] object-cover"
                            width={"100%"}
                            height={"100%"}
                          />
                        </div>
                      </div>
                    )
                  )
                : null}
              {}

              {/* <div className=" mx-2">
                <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                  <Image
                    src={projectObj.img}
                    alt="img"
                    className="w-[100%] h-[100%] object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
              <div className=" mx-2">
                <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                  <Image
                    src={projectObj.img}
                    alt="img"
                    className="w-[100%] h-[100%] object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div> */}
            </EmblaCarousel>
          </div>
        </section>
        <section className=" bg-primaryDark py-[150px] pb-[100px] mt-[-150px]">
          <div className="container">
            <div className="text-white my-20 flex flex-col md:flex-row md:justify-between">
              <h3 className=" text-[26px] font-bold">Our Challenge</h3>
              <p className="mt-3 max-w-[600px]">
                Lorem ipsum dolor sit amet consectetur. Lectus leo tincidunt
                ipsum libero placerat. Leo metus purus tempor lectus. Vitae
                adipiscing sit quis laoreet tellus montes. Id in viverra sed
                senectus arcu sit.
                <br />
                <br />
                adipiscing sit quis laoreet tellus montes. Id in viverra sed
                senectus arcu sit.
              </p>
            </div>
            <div className="text-white my-20 flex flex-col md:flex-row md:justify-between">
              <h3 className=" text-[26px] font-bold">Solution & Result</h3>
              <p className="mt-3 max-w-[600px]">
                Lorem ipsum dolor sit amet consectetur. Lectus leo tincidunt
                ipsum libero placerat. Leo metus purus tempor lectus. Vitae
                adipiscing sit quis laoreet tellus montes. Id in viverra sed
                senectus arcu sit.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="w-full h-[2px] bg-slate-500"></div>
            <div className=" my-10 py-3">
              <h3 className=" text-white text-[24px] my-5 font-bold ">
                Recent Projects:{" "}
              </h3>
              <div className=" flex flex-col md:flex-row md:justify-center gap-8">
                {[...data.projects].slice(-3).map((project, i) => (
                  <div
                    className="project rounded-[10px] overflow-hidden w-[333px] relative"
                    key={i}
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      className=" hover:scale-110 transition-all"
                    />
                    <div className="absolute bottom-[0px] px-3 translate-y-[-20%]">
                      <Link href={`/en/projects/${project.id}/${project.url}`}>
                        <h2 className=" text-white font-bold text-[28px] hover:text-secondary transition-colors cursor-pointer">
                          {project.title}
                        </h2>
                      </Link>
                      <div className="tags mt-4 flex gap-2">
                        {project.tags.map((tag, i) => (
                          <div
                            className=" bg-white w-fit py-1 px-4 rounded-[5px] text-[14px] flex items-center font-semibold "
                            key={i}
                          >
                            {tag.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-primaryDark pb-[100px]">
          <div className="container flex justify-center">
            <div className="w-[100%] md:w-[80%]">
              <Form object={data.form} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
