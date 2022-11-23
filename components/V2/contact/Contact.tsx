import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { SiMinutemailer } from "react-icons/Si";
import { HiOutlineDownload } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMailOpen } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/Fa";
import style from "../../../styles/V2/Contact/Contact.module.css";

interface MailInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// type MailInfo = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MailInfo>();

  const onSubmit = async (data: MailInfo) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_67457x8",
        "template_g6er89i",
        templateParams,
        "V9FiYPkfj9TMFJR-e"
      );

      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-[#0A182E]  text-[#1EC08F] flex justify-evenly h-screen items-center p-20">
      {/* <div className="bg-gradient-to-r from-[#0A182E] via-[#445676] to-[#8792a2] text-[#1EC08F] flex justify-evenly h-screen items-center p-20"></div> */}

      <div className="">
        <p className=" mb-14 text-6xl font-bold ">
          <i> Contact Me </i>
        </p>
        <div className="flex items-center text-xl text-[#8892B0]  mb-6">
          <BiPhoneCall />
          <p className="px-3 mb-1 font-sans font-semibold">+8801793439379</p>
        </div>
        <div className="flex text-xl text-[#8892B0] items-center mt-6">
          <IoIosMailOpen />
          <p className="px-3 font-sans  font-semibold">kayes.ek8@gmail.com</p>
        </div>
        <div className="flex text-xl text-[#8892B0] items-center my-6">
          <FaRegAddressCard />
          <p className="px-3 font-sans  font-semibold">
            Uttara, Dhaka - 1230 Bangladesh
          </p>
        </div>
        <div className="py-3">
          <p className={style.contactDetails}>For Collaboration or Team Work</p>
          <p className={style.contactDetails}>
            Contact me at your convenience or leave some wise advice.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="resume.pdf"
            className="btn border-2 text-[#4AB9A7] bg-[#0A182E] font-semibold border-[#7DD3FC] normal-case hover:text-black hover:bg-[#7DD3FC]"
            download
          >
            <i className="text-[16px] pr-2"> Download Resume</i>
            <HiOutlineDownload className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="ContactForm ">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className="contactForm rounded-2xl bg-[#1F2937]">
                <form
                  className="p-20"
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <h1 className=" xl:text-5xl text-xl font-bold text-center py-4">
                    <i> be with me... </i>
                  </h1>
                  <div className="row formRow flex">
                    <div className="col-6 py-4 mr-5 ">
                      <input
                        type="text"
                        // name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="border-2 py-2 px-4 rounded-lg border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Name"
                      ></input>
                      {errors.name && (
                        <span className="errorMessage">
                          {/* {errors.name.message} */}
                        </span>
                      )}
                    </div>
                    <div className="col-6 py-4 ml-5">
                      <input
                        type="email"
                        // name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="border-2 py-2 px-4 rounded-lg border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Email address"
                      ></input>
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow py-2">
                    <div className="col">
                      <input
                        type="text"
                        // name="subject"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className="border-2 w-full py-2 px-4 rounded-md border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Subject"
                      ></input>
                      {errors.subject && (
                        <span className="errorMessage">
                          {/* {errors.subject.message} */}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow py-4">
                    <div className="col">
                      <textarea
                        rows={3}
                        // name="message"
                        {...register("message", {
                          required: true,
                        })}
                        className="border-2 w-full px-4 pt-4 rounded-xl border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className="errorMessage">
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className="submit-btn border-2 border-[#1EC08F] rounded-lg hover:bg-[#7DD3FC] hover:border-[#7DD3FC] hover:text-black hover:font-bold"
                    type="submit"
                  >
                    <div className="flex justify-evenly items-center w-[150px]  py-2">
                      <SiMinutemailer className="text-lg" />
                      <h1 className="font-bold uppercase"> Drop </h1>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
