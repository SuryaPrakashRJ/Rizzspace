import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const Accordion = () => {

  const text = (
    <p
      style={{
        paddingLeft: 24,
        color:"#fff"
      }}>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );

  const items = [
    {
      key: "1",
      label: "Tailored Solutions",
      children: text,
    },
    {
      key: "2",
      label: "Cutting Edge Technology",
      children: text,
    },
    {
      key: "3",
      label: "Dedicated Team",
      children: text,
    },
    {
      key: "4",
      label:"Reliable Support ",
      children: text,
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
