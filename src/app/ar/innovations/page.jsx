import { cairoClass, poppinsClass } from "@/app/font";
import { BounceBall } from "@/components";
import Image from "next/image";
import React from "react";
import { homeHero, innov1, innovaition } from "../../../../public";

const innovations = [
  {
    title: "قصة مونارايز",
    description: `موناريسا! أم موناليزا؟موناريسا شركة تجارية
تعمل في مجال العقارات والسياحة،
تقع تحديدًا في ريزا، ريزا هي المدينة الجذابة
واللوحة الفنية الفريدة في الشمال التركي، جبالها وهضابها وبحرها وسمائها،
وكذلك الحال في طقسها وشعبها. في الواقع، هذه المدينة هي لوحة فنية فريدة من نوعها،
من نوعها في الإبداع الطبيعي الذي تتميز به.

`,
    img: innov1,
  },
  {
    title: "قصة مونارايز",
    description: `موناريسا! أم موناليزا؟موناريسا شركة تجارية
تعمل في مجال العقارات والسياحة،
تقع تحديدًا في ريزا، ريزا هي المدينة الجذابة
واللوحة الفنية الفريدة في الشمال التركي، جبالها وهضابها وبحرها وسمائها،
وكذلك الحال في طقسها وشعبها. في الواقع، هذه المدينة هي لوحة فنية فريدة من نوعها،
من نوعها في الإبداع الطبيعي الذي تتميز به.

`,
    img: innov1,
  },
];

const page = () => {
  return (
    <main className={`${cairoClass}`}>
      <section className={`"flex  py-[100px] md:my-10 `}>
        <div className="container md:justify-between md:items-center  flex flex-col md:flex-row">
          <div className=" textContent">
            <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-bold text-primaryDark leading-[48px] md:leading-[60px]">
              <span className=" text-primaryDark">ابتكاراتنا</span>
            </h1>
            <p className=" mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px]  font-medium leading-7">
              يعرض قسم الابتكارات لدينا القصص وراء العلامات التجارية التي
              ابتكرناها، بالإضافة إلى اسمنا وشعارنا. هنا، ستكتشف ما يميزنا
              وتكتسب رؤى حول إنشاء علامات تجارية فريدة
              <br />
              <br />
              في السوق. يتطلب إنشاء علامة تجارية موهبة وذكاءً تجاريًا، مع
              الإلهام والكفاءة التي تتوج بالعمل المتميز.
            </p>
            <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
              تواصل معنا
            </button>
          </div>
          <div className=" flex justify-end relative">
            <BounceBall />
            <Image
              src={innovaition}
              alt="homeHero"
              className=" md:w-[420px] scale-x-[-1]"
              width={350}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className=" bg-primaryDark py-10 md:mt-[100px]">
        <div className="container">
          {innovations.map((innov, i) => (
            <div
              className={`innov-container flex flex-col my-10  ${
                (i + 1) % 2 === 0 ? " md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between `}
              key={i}
            >
              <div className="innov-text my-5 ">
                <h2 className="text-[36px] text-white font-bold">
                  {innov.title}
                </h2>
                <p className=" text-white max-w-[370px] font-normal mt-4 leading-7">
                  {innov.description}
                </p>
                <button className="w-fit text-primary text-[14px] font-medium mt-6  bg-secondary rounded-full px-9  py-3">
                  أكمل القصة{" "}
                </button>
              </div>
              <div className="innov-img overflow-hidden rounded-[10px]">
                <Image
                  src={innov.img}
                  alt="innov1"
                  className=" hover:scale-110 transition-all "
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
