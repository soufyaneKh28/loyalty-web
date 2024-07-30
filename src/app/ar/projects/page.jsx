import dataAr from "@/app/content-ar";
import { cairoClass, poppinsClass } from "@/app/font";
import { Button, CallTo, MotionContainer, MotionLayout } from "@/components";
import { poppins } from "@/components/Menubar";
import Image from "next/image";
import React from "react";
import { nextSvg, project } from "../../../../public";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "مشاريعنا | قصص نجاح وكالة لويالتي",
  description:
    " اكتشف المشاريع الناجحة لوكالة لويالتي. من تطوير العلامة التجارية إلى التسويق الرقمي والبرمجة، شاهد كيف ساعدنا الشركات في الازدهار في تركيا، دبي، والولايات المتحدة الأمريكية",
  keywords:
    "المشاريع، قصص النجاح، تطوير العلامة التجارية، التسويق الرقمي، البرمجة، وكالة لويالتي، تركيا، دبي، الولايات المتحدة الأمريكية",
};


export const productsLength = dataAr.projects.length;
export const defaultPage = 1;
export const itemsPerPage = 9;
const pagesArray = [];
for (let i = 1; i <= Math.ceil(productsLength / itemsPerPage); i++) {
  pagesArray.push(i);
}
//${encodeURIComponent(arabicText)}
async function page({ searchParams }) {
  const page = Number(searchParams.page ? searchParams.page : defaultPage);
  // console.log(searchParams);
  // console.log("page", page);

  // console.log("length", productsLength);
  // console.log("itemsparpage", itemsPerPage);
  // console.log("array", pagesArray);
  // i should solve the problem here

  async function getProjectsData() {
    const res = await fetch(
      "https://seenfox.com/api/get_data.php?actions=projects&lang_code=ar",
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

  const projects = await getProjectsData();

  if (page < 1 || page > Math.ceil(productsLength / itemsPerPage)) {
    redirect(`/ar/not-found`);
  }

  return (
    <main className={`${cairoClass}`}>
      <MotionLayout>
        <section className={`"flex  pb-[100px] py-[150px] md:pt-[200px] `}>
          <div className="container md:justify-center md:items-center  flex flex-col ">
            <div className=" textContent text-center flex flex-col items-center">
              <MotionContainer
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className=" text-[40px] max-w-[550px] md:text-[50px] md:max-w-[800px] font-black text-primaryDark leading-[60px] md:*:text-center md:leading-[60px]">
                  قصص النجاح لدينا
                </h1>
              </MotionContainer>
              <MotionContainer
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6 }}
              >
                <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px]  font-semibold leading-[27px]">
                  ألق نظرة على مجموعتنا من المشاريع الناجحة. كل منها شهادة على
                  تفانينا وإبداعنا وخبرتنا.
                </p>
                <Button>
                  <Link href={"/ar/contactUs"}>{dataAr.heroAbout.cta}</Link>
                </Button>
              </MotionContainer>
            </div>
          </div>
        </section>
        <section className="py-10 bg-[#191C1D]">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <p className=" text-secondary font-bold">مشاريعنا</p>
            </div>
            <h2 className="text-[32px] font-bold text-white">
              انظر إلى أحدث مشاريعنا
            </h2>
          </div>
          <div className=" container">
            <div className="projects my-10">
              <div className="projects-btn">
                <div className="projects-container flex flex-col items-center md:flex-row  justify-center gap-5 flex-wrap">
                  {[...projects.projects]
                    .reverse()
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((project, i) => (
                      <MotionLayout delay={0.3 * i} key={i}>
                        <div className="project rounded-[10px]  h-[416px] overflow-hidden w-[333px] relative">
                          {/* <div className=" w-full h-[50%] absolute bottom-0 project z-10 "></div> */}
                          <Image
                            src={project.project_image}
                            width={333}
                            height={437}
                            alt={project.project_image_alt}
                            className=" hover:scale-110 w-full h-full transition-all"
                          />
                          <div className="absolute bottom-[0px] z-30 px-3 translate-y-[-20%]">
                            <Link
                              href={`/ar/projects/${[
                                project.project_id,
                              ]}/${project.project_name.replaceAll(" ", "-")}`}
                            >
                              <h2 className=" text-white font-bold text-[28px] hover:text-secondary transition-colors cursor-pointer">
                                {project.project_name}
                              </h2>
                            </Link>
                            <div className="tags mt-4 flex gap-2">
                              <div className=" bg-white w-fit py-1 px-4 rounded-[5px] text-[14px] flex items-center font-semibold ">
                                {project.pcategory_lang_name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </MotionLayout>
                    ))}
                </div>
              </div>
            </div>
            <div className="pagination my-10 flex justify-center ">
              <nav aria-label="" className="">
                <ul class="inline-flex gap-1 -space-x-px text-sm">
                  {Number(page) != 1 ? (
                    <li className=" overflow-hidden rounded-[5px]">
                      <Link
                        href={`/ar/projects/?${new URLSearchParams({
                          page: String(page > 1 ? page - 1 : 1),
                        }).toString()}`}
                        className="flex items-center rounded-[5px] justify-center px-1 h-10 font-bold leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <Image src={nextSvg} alt="next"></Image>
                      </Link>
                    </li>
                  ) : null}
                  {pagesArray.map((num, i) => (
                    <li key={i}>
                      <Link
                        href={`/ar/projects?page=${num}`}
                        className={` flex ${
                          Number(page) === num ? " text-secondary" : ""
                        } items-center justify-center px-5 h-10 leading-tight rounded-[5px]  font-bold text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                      >
                        {num}
                      </Link>
                    </li>
                  ))}
                  {Number(page) ===
                  Math.ceil(productsLength / itemsPerPage) ? null : (
                    <li className="rounded-[5px] overflow-hidden">
                      <Link
                        href={`/ar/projects/?${new URLSearchParams({
                          page: String(
                            page < Math.ceil(productsLength / itemsPerPage)
                              ? page + 1
                              : Math.ceil(productsLength / itemsPerPage)
                          ),
                        }).toString()}`}
                        className="flex items-center rounded-[5px] justify-center px-1 h-10 font-bold leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <Image
                          src={nextSvg}
                          alt="next"
                          className=" rotate-[180deg]"
                        ></Image>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-20">
            <CallTo object={dataAr} />
          </div>
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;
