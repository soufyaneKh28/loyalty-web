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
import { Menubar, MotionLayout } from "@/components";

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

// async function getBlogsData() {
//   const res = await fetch(
//     `https://seenfox.com/api/get_data.php?actions=blog&lang_code=en&blog_id=${params.blogId}`,
//     { cache: "no-store" }
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
// const blogs = await getBlogsData();

// export const metadata ={} ;
// = {
//   title:"b",
//   description: "Generated by create next app",
// };
// async function getStaticProps({ params }) {
//   console.log("Server-side log:", params.projectId);
//   return {
//     props: {
//       projectId: params.projectId,
//     },
//   };project.title

// }

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id
  //  console.log('its id ===== ', params.blogId)
  //  console.log('its id ===== ', params.blogTitle)
  // fetch data
  const product = await fetch(
    `https://seenfox.com/api/get_data.php?actions=blog&lang_code=en&blog_id=${params.blogId}`
  ).then((res) => res.json());

  //  console.log('its product ===== ', product)
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  if (product.blog === null) {
    redirect("/en/not-found");
  } else {
    console.log("this is the description", product.blog.blog_desc);
    return {
      title: product.blog.blog_title,
      description: `${product.blog.blog_desc}`,
      keywords: ` ${product.blog.blog_keyword}`,

      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  }
}

// export async function generateStaticParams({params}) {
//   // const blogs = await fetch(`https://seenfox.com/api/get_data.php?actions=blog&lang_code=en&blog_id=${params.blogId}`).then((res) => res.json())
//   // const blogs = await fetchBlogs();
//   let title = encodeURIComponent(params.blogTitle)
// console.log("it iiiiiiiis gereratestatic",  title)
//   // Return the encoded title and id for each blog
//   // return {
//   //   id: params.id,
//   //   title: encodeURIComponent(blogs.blog.blog_title),
//   // };
// }

async function Page({ params }) {
  //   let exist = true;
  async function getBlogsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=blog&lang_code=en&blog_id=${params.blogId}`,
      { cache: "no-store" }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const blogs = await getBlogsData();

  let title = decodeURIComponent(params.blogTitle);
  let blogObj = blogs.blog;
  // metadata.title = `${blogObj.blog_title}`;
  // console.log('it is bloogs =========>' ,blogObj)
  //   console.log("Visual-Identity-Souq-alfurat");

  // console.log("it iiiiiiiis gereratestatic ====>",  title)
  // console.log("it is params=============>" , params.blogTitle)
  // console.log("it is title with dashed=============>" , blogObj.blog_title.replaceAll(" ", "-") )
  // //   const arrayOfStrings = params.projectTitle.split("-");

  //   console.log(arrayOfStrings);
  //   let Title = arrayOfStrings.join(" ");

  //   console.log(Title);
  // if (!blogObj || blogObj.url != params.blogTitle) {
  //   // exist = false;
  //   redirect(`/en/not-found`);
  // }
  if (
    blogObj === null ||
    blogObj.blog_title.replaceAll(" ", "-").replace("?", "") !=
      decodeURIComponent(params.blogTitle)
  ) {
    // exist = false;
    redirect(`/en/not-found`);
  }
  return (
    <>
      <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      {/* <head>
        <meta name="description" content={`${blogObj.pageseo_keywords}`} />
      </head> */}
      {/* <Menubar params={params} /> */}
      <main className={` pt-[100px] ${poppinsClass}`}>
        <MotionLayout>
          <section>
            <div className=" container  my-10 mb-[200px] flex  gap-5  flex-col md:flex-row">
              <div className="blogs-cont w-full md:w-[90%] flex-wrap flex flex-col md:flex-row items-center md:items-start justify-start">
                <MotionLayout>
                  <div className="blog m-2  ">
                    <div className=" h-[325px]  overflow-hidden rounded-[20px]">
                      <Image
                        src={`${blogObj.blog_image}`}
                        width={500}
                        height={300}
                        alt={`${blogObj.blog_image_alt}`}
                        className=" h-[100%] w-full object-cover hover:scale-110 transition-all cursor-pointer "
                      />
                    </div>
                    <h3 className="  text-[28px] leading-8 mt-5 transition-all font-bold">
                      {blogObj.blog_title}
                    </h3>
                    <div className=" flex justify-between mt-4 items-center">
                      <div className="date text-[#807B75] font-medium">
                        {blogObj.blog_date}
                      </div>
                      {/* <div className="tag bg-[#B0D9DF] px-3 py-1 texr-[#003642] font-medium rounded-[5px]">
                        {blogObj.tag}
                      </div> */}
                    </div>

                    <div className=" my-5 leading-7">
                      <div
                        dangerouslySetInnerHTML={{ __html: blogObj.blog_descc }}
                      ></div>
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
                              src={blog.blog_image}
                              alt={`${blog.blog_image_alt}`}
                              width={100}
                              height={100}
                              className=" h-[100%] w-full object-cover "
                            />
                          </div>
                          <div className=" flex-1 flex-col justify-between ms-3">
                            <Link
                              href={`/en/blogs/${
                                blog.blog_id
                              }/${blog.blog_title.replaceAll(" ", "-")}`}
                            >
                              <p className="  font-semibold hover:text-secondary transition-all leading-5 cursor-pointer cur">
                                {blog.blog_title}
                              </p>
                            </Link>
                            <div className="date text-[#807B75] font-medium mt-3">
                              {blog.blog_date}
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
        </MotionLayout>
      </main>
    </>
  );
};

export default Page;
