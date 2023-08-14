import { Input, Checkbox, Col, Row, Button } from "antd";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { TextArea } = Input;

export default function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);
  const [loading, setLoading] = useState(false);
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  const onChangeCheckbox = (checkedValues) => {
    setCheckedValues(checkedValues);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const telebot = await axios.post(
      `https://api.telegram.org/bot${
        import.meta.env.VITE_TELEGRAM_BOTID
      }/sendMessage`,
      {
        chat_id: import.meta.env.VITE_TELEGRAM_CHATID,
        text: `New Client Request \nEmail: ${email}\nName: ${name}\nServices:\n ${checkedValues}\nMessage:\n ${message}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
      }
    );

    console.log(telebot.status);
    if (telebot.status === 200) {
      toast.success(
        "Thank you for signing up for the beta. We will get back to you soon.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(false);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  return (
    <>
      <div>
        <div className="mx-[20px] md:mx-[60px] rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 my-[70px] md:my-[70px]">
          <div className="flex flex-col md:flex-row mx-[15px] md:mx-[30px] py-[18px] md:py-[20px] md:space-x-8">
            <div className="md:flex-1 text-white space-y-4 md:space-y-6 font-alegreyasans">
              <div className="text-3xl md:text-5xl font-bold leading-[50px] md:leading-[65px]">
                Let&apos;s Discuss Your Next Project
              </div>
              <div className="w-full md:w-[550px] space-y-4 md:space-y-8">
                <div className="flex flex-col">
                  <label htmlFor="Name">Your Name</label>
                  <Input
                    className=" h-11 rounded-sm"
                    required
                    onChange={(e) => handleName(e)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Email">Your Email</label>
                  <Input
                    className=" h-11 rounded-sm"
                    type="email"
                    required
                    onChange={(e) => handleEmail(e)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Checkbox">Services</label>
                  <Checkbox.Group
                  requied
                    className="w-full"
                    onChange={onChangeCheckbox}
                  >
                    <Row>
                      <Col span={8}>
                        <Checkbox
                          value="App Development"
                          className="text-white font-['Alegreya_Sans']"
                        >
                          App Development
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Web Development"
                          className="text-white font-['Alegreya_Sans']"
                        >
                          Web Development
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Rebranding"
                          className="text-white font-['Alegreya_Sans']"
                        >
                          Rebranding
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="UI/UX Design"
                          className="text-white font-['Alegreya_Sans']"
                        >
                          UI/UX Design
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Market Research"
                          className="text-white font-['Alegreya_Sans']"
                        >
                          Market Research
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Message">Message</label>
                  <TextArea
                    required
                    showCount
                    maxLength={1000}
                    style={{ height: 120, resize: "none" }}
                    onChange={(e) => handleMessage(e)}
                  />
                </div>

                <Button
                  type="primary"
                  className={`items-start w-[160px] md:w-[180px] bg-white text-purple-700 hover:bg-purple-700 hover:text-white ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  size="large"
                  onClick={handleSumbit}
                >
                  {loading ? <span>Sending...</span> : <span>Submit</span>}
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 text-center items-center">
              <img
                src="/ContactFormPic.svg"
                alt="Contact_Us_Pic"
                className="w-[570px] h-[485px] md:w-[870px] md:h-[730px] mx-0 my-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
