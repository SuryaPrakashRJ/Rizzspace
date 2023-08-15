import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const Accordion = () => {

  const text1 = (
    <p
      style={{
        paddingLeft: 24,
        color:"#fff"
      }}>
     We understand that every business is unique. Our value proposition lies in our ability to craft digital solutions that align perfectly with your brand&apos;s identity and goals. Whether it&apos;s a stunning website, a user-friendly app, captivating UI/UX designs, or insightful market research, our team of experts ensures that your vision is at the forefront of every project. Say goodbye to one-size-fits-all solutions, and say hello to personalized digital experiences that drive real results.
    </p>
  );


  const text2 = (
    <p
      style={{
        paddingLeft: 24,
        color:"#fff"
      }}>
     In today&apos;s competitive landscape, user experience is non-negotiable. Our value proposition centers on creating seamless and intuitive digital experiences that captivate your audience and drive conversions. Our UI/UX designs are carefully crafted to engage users, guiding them effortlessly through your digital ecosystem. With Rizzspace, you can expect designs that not only look stunning but also function flawlessly, ensuring that every click, swipe, and interaction adds value to your business.


    </p>
  );

  const text3 = (
    <p
      style={{
        paddingLeft: 24,
        color:"#fff"
      }}>
    We understand the urgency of today&apos;s business environment. Our value proposition is built on the commitment to delivering high-quality solutions within your timeline. With Rizzspace, you don&apos;t have to sacrifice excellence for speed. Our agile development methodologies, streamlined design processes, and efficient project management ensure that you get exceptional results without the stress of delays. Your success is our priority, and we&apos;re dedicated to delivering on time, every time.


    </p>
  );

  
  const text4 = (
    <p
      style={{
        paddingLeft: 24,
        color:"#fff"
      }}>
     Rizzspace doesn&apos;t just complete projects; we cultivate partnerships. Our value proposition extends beyond the immediate scope of work. We are dedicated to understanding your long-term goals and evolving with your business. With a collaborative approach, we provide ongoing support, updates, and enhancements to ensure that your digital assets remain relevant and effective. We&apos;re not just service providers; we&apos;re your trusted allies on the journey to sustained success and growth.

    </p>
  );

  const items = [
    {
      key: "1",
      label: "Tailored Solutions",
      children: text1,
    },
    {
      key: "2",
      label: "Seamless User Experiences",
      children: text2,
    },
    {
      key: "3",
      label: "Timely Delivery Without Compromising Quality",
      children: text3,
    },
    {
      key: "4",
      label:"Partnering for Long-Term Success and Growth",
      children: text4,
    }
  ];

  return (
    <>
      <section className=" bg-[#000000]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto">
            <h3 className="Heading text-center">Our Value Proposition</h3>
            <div className="">

              <Collapse
                items={items}
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined className="icons "/> : <PlusOutlined className="icons"/>
                }
                expandIconPosition={"end"}
                size="large"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Accordion;
