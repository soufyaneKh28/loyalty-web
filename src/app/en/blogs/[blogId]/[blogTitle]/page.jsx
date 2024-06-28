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
import { facebook, instagram, linkedin, x } from "../../../../../../public";
import { MotionLayout } from "@/components";

// export const generateMetaData = ({ params }): Metadata => {
//   return {
//     title: params.projectTitle,
//   };
// };

const socialMedia = [
  {
    icon: facebook,
    link: "",
  },
  {
    icon: instagram,
    link: "",
  },
  {
    icon: linkedin,
    link: "",
  },
  {
    icon: x,
    link: "",
  },
];

export const metadata = {
  title: "blog",
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
  //   let exist = true;
  metadata.title = `${params.blogTitle.split("-").join(" ")}`;

  //   console.log("Visual-Identity-Souq-alfurat");

  let blogObj = data.blogs[Number(params.blogId) - 1];
  //   const arrayOfStrings = params.projectTitle.split("-");

  //   console.log(arrayOfStrings);
  //   let Title = arrayOfStrings.join(" ");

  //   console.log(Title);
  if (!blogObj || blogObj.url != params.blogTitle) {
    // exist = false;
    redirect(`/en/not-found`);
  }

  return (
    <>
      <main className={` pt-[100px] ${poppinsClass}`}>
        <section>
          <div className=" container my-10 mb-[200px] flex gap-5  flex-col md:flex-row justify-between">
            <div className="blogs-cont w-full md:w-[90%] flex-wrap flex flex-col md:flex-row items-center md:items-start justify-start">
              <MotionLayout delay={0.3}>
                <div className="blog m-2 ">
                  <div className=" h-[225px] overflow-hidden rounded-[20px]">
                    <Image
                      src={blogObj.img}
                      width={"100%"}
                      height={"100%"}
                      alt="alt"
                      className=" h-[100%] object-cover hover:scale-110 transition-all cursor-pointer "
                    />
                  </div>

                  <div className=" flex justify-between mt-4 items-center">
                    <div className="date text-[#807B75] font-medium">
                      {blogObj.date}
                    </div>
                    <div className="tag bg-[#B0D9DF] px-3 py-1 texr-[#003642] font-medium rounded-[5px]">
                      {blogObj.tag}
                    </div>
                  </div>
                  <h3 className="  text-[22px] leading-8 mt-3 cursor-pointer  transition-all font-semibold">
                    {blogObj.title}
                  </h3>

                  <div className=" my-5">
                    <p>{blogObj.description}</p>
                  </div>
                </div>
              </MotionLayout>
            </div>
            <div className="side-bar  ">
              <div>
                <h4 className=" font-bold">RECENT POST</h4>
                <div className="recent-blogs mt-3">
                  {[...data.blogs]
                    .slice(-3)
                    .reverse()
                    .map((blog, i) => (
                      <div className=" my-4 flex items-start" key={i}>
                        <div className=" w-[82px] h-[82px] rounded-[5px] overflow-hidden">
                          <Image
                            src={blog.img}
                            alt="project"
                            width={"100%"}
                            height={"100%"}
                            className=" h-[100%] object-cover "
                          />
                        </div>
                        <div className=" flex-1 flex-col justify-between ms-3">
                          <Link href={`/en/blogs/${blog.id}/${blog.url}`}>
                            <p className="  font-medium hover:text-secondary transition-all leading-5 cursor-pointer cur">
                              {blog.title}
                            </p>
                          </Link>
                          <div className="date text-[#807B75] font-medium mt-3">
                            Sunday, 12.08.2023
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className=" w-full h-[1px] bg-[#B9B9B9] my-5" />
              <div className="">
                <h4 className=" font-bold">SOCIAL MEDIA</h4>
                <div className=" flex  my-3 gap-1">
                  {socialMedia.map((icon, i) => (
                    <Link href={icon.link} key={i}>
                      <div className=" icon w-[40px] h-[40px] hover:bg-white transition-colors bg-secondary rounded-full flex justify-center items-center">
                        <Image
                          src={icon.icon}
                          alt="facebook"
                          width={23}
                          priority
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
