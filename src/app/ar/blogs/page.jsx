import data from "@/app/content-ar";
import { cairoClass, poppinsClass } from "@/app/font";
import Image from "next/image";
import React from "react";
import {
  facebook,
  instagram,
  linkedin,
  projectDe,
  soufyane1,
  x,
} from "../../../../public";
import Link from "next/link";

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

function Blogs() {
  // console.log(data.blogs.reverse());

  return (
    <main className={`${cairoClass}`}>
      <section className={`"flex  pb-[100px] py-[150px] md:pt-[200px] `}>
        <div className="container md:justify-center md:items-center  flex flex-col ">
          <div className=" textContent md:text-center flex flex-col md:items-center">
            <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-black text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
              احدث <span className=" text-secondary">منشوراتنا</span>
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[800px] text-[#686567] text-[16px] font-medium leading-[27px]">
              تفضل بالتحقق من مقالاتنا المتخصصة في التسويق والأعمال، مقالات قيمة
              تتناول أهمية التسويق والبرمجة والتصميم في مجالات مختلفة. التحول
              الرقمي عالم واسع ومبتكر، ولكنه في الواقع علم يتطور بسرعة كبيرة
              وبمعدل مثير للإعجاب. اقرأ بعض المقالات المتعلقة بالتسويق الرقمي،
              البرمجة، التصميم، وكيفية تطبيقها علميا وعمليا على أرض الواقع.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" container my-10 mb-[200px] flex flex-col md:flex-row justify-between">
          <div className="blogs-cont  flex-wrap flex flex-col md:flex-row items-center md:items-start justify-start">
            {[...data.blogs].reverse().map((blog, i) => (
              <div className="blog m-2 max-w-[368px]" key={i}>
                <div className=" h-[225px] overflow-hidden rounded-[20px]">
                  <Link
                    href={`/ar/blogs/${blog.id}/${blog.url}`}
                    className="h-[100%] w-full block"
                  >
                    <Image
                      src={blog.img}
                      width={"100%"}
                      height={"100%"}
                      alt="alt"
                      className=" h-[100%] object-cover hover:scale-110 transition-all cursor-pointer "
                    />
                  </Link>
                </div>
                <Link href={`/ar/blogs/${blog.id}/${blog.url}`}>
                  <h3 className=" max-w-[368px] text-[22px] leading-8 mt-3 cursor-pointer hover:text-secondary transition-all font-bold">
                    {blog.title}
                  </h3>
                </Link>
                <div className=" flex justify-between mt-4 items-center">
                  <div className="date text-[#807B75] font-medium">
                    {blog.date}
                  </div>
                  <div className="tag bg-[#B0D9DF] px-3 py-1 texr-[#003642] font-medium rounded-[5px]">
                    {blog.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="side-bar flex-1 basis-[85%] ">
            <div>
              <h4 className=" font-bold">المنشورات الأخيرة</h4>
              <div className="recent-blogs mt-3">
                {data.blogs.slice(-3).map((blog, i) => (
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
                      <Link href={`/ar/blogs/${blog.id}/${blog.url}`}>
                        <h5 className="  font-medium hover:text-secondary transition-all leading-5 cursor-pointer cur">
                          {blog.title}
                        </h5>
                      </Link>
                      <div className="date text-[#807B75] font-medium mt-3">
                        {blog.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full h-[1px] bg-[#B9B9B9] my-5" />
            <div className="">
              <h4 className=" font-bold">وسائل التواصل الاجتماعي</h4>
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
  );
}

export default Blogs;
