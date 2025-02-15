import apolovideo from "../../assets/video/APOLO LAWYERS.mp4";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageMeta from "../../components/PageMeta/PageMeta";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Slider from "react-slick";
import rieng from "../../assets/luatsu/rieng.png";
import tranhtung from "../../assets/luatsu/tranhtung.png";
import hinhsu from "../../assets/luatsu/hinhsu.png";
import dansu from "../../assets/luatsu/dansu.png";
import nhadat from "../../assets/luatsu/nhadat.png";
import laodong from "../../assets/luatsu/laodong.png";
import tuvanhopdong from "../../assets/luatsu/tuvanhopdong.png";
import honnhanvagiadinh from "../../assets/luatsu/honnhanvagiadinh.png";
import doanhnghiepvadautu from "../../assets/luatsu/doanhnghiepvadautu.png";
import hanghaivabaohiemquocte from "../../assets/luatsu/hanghaivabaohiemquocte.png";
import nguoinuocngoaitaivietnam from "../../assets/luatsu/nguoinuocngoaitaivietnam.png";
import tuvanvaxaydung from "../../assets/luatsu/tuvanvaxaydung.png";
import customer1 from "../../assets/imgs/customer1.png";
import CardService from "../../components/CardSevice/CardService";
import tinmoi1 from "../../assets/imgs/tinmoi1.png";
import tinmoi2 from "../../assets/imgs/tinmoi2.png";
import tinmoi3 from "../../assets/imgs/tinmoi3.png";
import { Row } from "react-bootstrap";

import "./HomePage.css";
export default function HomePage() {
  const dataLuatSu = [
    {
      image: rieng,
      heading: "Luật sư riêng",
      description:
        "Bạn sẽ có một luật sư đại diện luôn sẵn sàng giải quyết mọi vấn đề pháp lý một cách nhanh chóng và hiệu quả.",
    },
    {
      image: tranhtung,
      heading: "Luật sư tranh tụng",
      description:
        "Bảo vệ quyền lợi của bạn trong các vụ kiện và tranh chấp pháp lý.",
    },
    {
      image: hinhsu,
      heading: "Luật sư hình sự",
      description:
        "Bảo vệ pháp lý chuyên nghiệp và tận tâm trong các vụ án hình sự.",
    },
    {
      image: dansu,
      heading: "Luật sư dân sự",
      description:
        "Hỗ trợ pháp lý chuyên nghiệp trong các vụ tranh chấp và vấn đề dân sự.",
    },
    {
      image: nhadat,
      heading: "Luật sư nhà đất",
      description:
        "Đảm bảo quyền lợi và tài sản của bạn với sự hỗ trợ pháp lý chuyên nghiệp",
    },
    {
      image: laodong,
      heading: "Luật sư lao động",
      description:
        "Bảo vệ quyền lợi lao động của bạn với sự tư vấn chuyên sâu và tận tâm",
    },

    {
      image: tuvanhopdong,
      heading: "Luật sư tư vấn hợp đồng",
      description: "Đảm bảo mọi giao dịch của bạn đều an toàn và minh bạch",
    },
    {
      image: honnhanvagiadinh,
      heading: "Luật sư hôn nhân và gia đình",
      description:
        "Bảo vệ hạnh phúc gia đình bạn với sự hỗ trợ pháp lý tận tâm",
    },
    {
      image: doanhnghiepvadautu,
      heading: "Luật sư doanh nghiệp và đầu tư",
      description:
        "Đảm bảo sự phát triển bền vững và an toàn cho doanh nghiệp bạn",
    },
    {
      image: tuvanvaxaydung,
      heading: "Luật sư tư vấn về xây dựng",
      description:
        "Xây dựng nền tảng vững chắc cho dự án của bạn với sự tư vấn pháp lý chuyên nghiệp",
    },
    {
      image: hanghaivabaohiemquocte,
      heading: "Luật sư hàng hải và bảo hiểm và quốc tế",
      description:
        "Đảm bảo an toàn và quyền lợi cho hoạt động hàng hải và bảo hiểm của bạn",
    },
    {
      image: nguoinuocngoaitaivietnam,
      heading: "Luật sư cho người nước ngoài tại Việt Nam",
      description:
        "Hỗ trợ pháp lý toàn diện và chuyên nghiệp cho người nước ngoài tại Việt Nam",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3.5,
    centerMode: true,
  };
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA3, inView: inViewA3 } = useInView({ triggerOnce: true });
  const { ref: refA4, inView: inViewA4 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });
  return (
    <>
      <PageMeta
        title="Công ty luật"
        description="Tại sao bạn cần công ty luật ?"
      />
      <div className="">
        <div className="relative">
          <div className="iframe-containe relative" style={{ height: "100vh" }}>
            <video
              src={apolovideo}
              width="100%"
              height="100vh"
              autoPlay
              loop
              muted
              poster="apolovideo.jpg"
            ></video>
            <div
              className="absolute text-white"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <div className="self-stretch text-center text-[#f1fcfb] text-[112px] font-bold font-space-grotesk leading-[124px]">
                Apolo Lawyers
              </div>
              <div className="self-stretch text-center text-[#f6f6f6] text-[32px] font-bold font-space-grotesk leading-10">
                Giải pháp pháp lý toàn diện cho mọi nhu cầu của bạn
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div
              ref={refA3}
              style={{
                width: "70%",
                position: "absolute",
                bottom: "-240px",
                zIndex: 9999,
                left: "15%",
              }}
              className={`${
                inViewA3 ? "animate-slide-bottom" : ""
              } self-stretch  px-20 py-10 bg-white rounded-2xl shadow flex-col justify-center items-center gap-10 flex`}
            >
              <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                  Về chúng tôi
                </div>
                <div className="w-[654px] text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                  Apolo Laywers là một công ty luật hàng đầu với nhiều năm kinh
                  nghiệm trong việc cung cấp các dịch vụ pháp lý chất lượng cao.
                  Chúng tôi tự hào sở hữu đội ngũ luật sư giỏi, chuyên nghiệp và
                  tận tâm, luôn sẵn sàng hỗ trợ khách hàng trong mọi tình huống
                  pháp lý.
                </div>
              </div>
              <ButtonCustom
                title="Xem chi tiết"
                from="#40e0d0"
                to="#48d1cc"
                color="text-white"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div
            ref={refA4}
            className={` ${
              inViewA4 ? "animate-slide-bottom" : ""
            } py-[300px] self-stretch h-[951px]  flex-col justify-start items-start gap-10 flex`}
          >
            <div className="self-stretch justify-start items-center gap-[233px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-black text-5xl font-bold font-space-grotesk leading-[56px]">
                  Dịch vụ của chúng tôi
                </div>
                <div className="self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                  Nếu bạn tìm kiếm sự trợ giúp về pháp lý, các dịch vụ của chúng
                  tôi sẽ đáp ứng tất cả
                </div>
              </div>
              <div className="justify-start items-center gap-4 flex">
                <div className="p-2.5 bg-[#e7ecf1] rounded-full justify-center items-center gap-2.5 flex">
                  <div className="w-7 h-7 pl-[8.75px] pr-[10.50px] py-[5.25px] justify-center items-center flex">
                    <FaChevronLeft />
                  </div>
                </div>
                <div className="p-2.5 bg-[#e7ecf1] rounded-full justify-center items-center gap-2.5 flex">
                  <div className="w-7 h-7 pl-[10.50px] pr-[8.75px] py-[5.25px] justify-center items-center flex">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>

            <Row className="self-stretch justify-start items-center inline-flex">
              <Slider {...settings}>
                {dataLuatSu?.map((item, index) => {
                  return <CardService key={index} index={index} item={item} />;
                })}
              </Slider>
            </Row>
          </div>
        </div>
        <Row
          className="relative"
          style={{ width: "100%", marginTop: "200px", marginBottom: "90px" }}
        >
          <div className="w-full bg-gradient-to-r pt-5 pb-24 from-[#40e0d0] to-[#48d1cc] flex-col justify-start items-center gap-6 inline-flex">
            <div className="self-stretch text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
              Đặc Điểm Nổi Bật của Apollo Lawyers
            </div>
            <div className="w-[654px] text-center text-white text-base font-normal font-open-sans leading-7">
              Chúng tôi tự hào là một trong những công ty luật hàng đầu tại Việt
              Nam, luôn đặt lợi ích của khách hàng lên hàng đầu và cam kết mang
              đến những dịch vụ pháp lý tốt nhất.
            </div>
          </div>
          <div
            ref={refA1}
            className={`${
              inViewA1 ? "animate-slide-bottom" : ""
            } absolute justify-center items-center inline-flex noibat`}
            style={{ bottom: "-170px" }}
          >
            <div className=" hoverScale w-[387px] h-[246px] pl-3.5 pr-[13px] py-[11px] justify-center items-center flex">
              <div className="px-6 pt-8 pb-16 bg-white rounded-2xl shadow justify-start items-center gap-6 inline-flex">
                <div className="text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                  01
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="w-[219px] text-[#48d1cc] text-[28px] font-bold font-space-grotesk leading-9">
                    Chuyên nghiệp
                  </div>
                  <div className="w-[219px]">
                    <span className="text-[#002740] text-base font-normal font-open-sans leading-7">
                      Với đội ngũ Luật sư có{" "}
                    </span>
                    <span className="text-[#002740] text-base font-normal font-open-sans leading-7">
                      kinh nghiệm và làm việc trong
                    </span>
                    <span className="text-[#002740] text-base font-normal font-open-sans leading-7">
                      {" "}
                      môi trường{" "}
                      <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                        chuyên nghiệp.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hoverScale w-[387px] h-[246px] pl-3.5 pr-[13px] py-[11px] justify-center items-center flex">
              <div className="px-6 pt-8 pb-16 bg-white rounded-2xl shadow justify-start items-center gap-6 inline-flex">
                <div className="text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                  02
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="w-[219px] text-[#48d1cc] text-[28px] font-bold font-space-grotesk leading-9">
                    Uy tín
                  </div>
                  <div className="w-[219px]">
                    <span className="text-[#002740] text-base font-normal font-open-sans leading-7">
                      Luôn đặt chữ{" "}
                    </span>
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      TÍN
                    </span>
                    <span className="text-[#002740] text-base font-normal font-open-sans leading-7">
                      {" "}
                      lên hàng đầu, tạo nên sự thành công vững chãi.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hoverScale w-[387px] h-[246px] pl-[13.50px] pr-[12.50px] py-[11px] justify-center items-center flex">
              <div className="px-6 pt-8 pb-16 bg-white rounded-2xl shadow justify-start items-center gap-6 inline-flex">
                <div className="text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                  03
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="w-[219px] text-[#48d1cc] text-[28px] font-bold font-space-grotesk leading-9">
                    Tận tâm
                  </div>
                  <div className="w-[219px]">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Hết mình
                    </span>
                    <span className="text-[#002740] text-base font-normal font-open-sans leading-7">
                      {" "}
                      trong công việc - đó là phương châm làm việc tại Apolo
                      Lawyers.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <section className="self-stretch px-[150px] pt-60 w-full justify-center items-end inline-flex">
          <div
            ref={refA1}
            className={` ${
              inViewA1 ? "animate-slide-left" : ""
            } w-[515px] flex-col flex justify-start items-end gap-10 `}
          >
            <div className="self-stretch text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
              Khách hàng nói gì về Apolo Laywers
            </div>

            <div className=" self-stretch h-max px-16 py-10 bg-[#f4f4f4] rounded-tl-2xl rounded-bl-2xl flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch text-[#002740] text-base font-normal font-open-sans leading-normal">
                Apolo Lawyers đã giúp tôi vượt qua một vụ tranh chấp pháp lý
                phức tạp liên quan đến doanh nghiệp của mình. Sự chuyên nghiệp
                và tận tâm của họ đã tạo nên sự khác biệt. Tôi đặc biệt ấn tượng
                với khả năng lắng nghe và tư vấn của đội ngũ luật sư. Họ luôn
                sẵn sàng hỗ trợ mọi lúc cần thiết, mang đến cho tôi sự an tâm
                tuyệt đối khi có họ bên cạnh.
              </div>
              <div className="justify-start items-center gap-4 inline-flex">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={customer1}
                />
                <div className="text-[#002740] text-base font-semibold font-open-sans leading-loose">
                  Chị Linh - doanh nhân
                </div>
              </div>
            </div>
          </div>
          <div
            ref={refA2}
            className={`  ${
              inViewA2 ? "animate-slide-right" : ""
            } rounded-tl-2xl rounded-tr-2xl rounded-br-2xl justify-between items-start flex`}
          >
            <img src={customer1} />
          </div>
        </section>
        <section className="w-full">
          <div
            ref={refA6}
            className={` ${
              inViewA6 ? "animate-slide-bottom" : ""
            }  px-[100px] py-28 flex-col  items-center gap-10 flex`}
          >
            <div className=" flex-col justify-center items-center gap-6 flex">
              <div className=" text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                Tin tức mới nhất
              </div>
              <div
                style={{ width: "50%" }}
                className=" text-center text-[#606670] text-base font-normal font-open-sans leading-normal"
              >
                Cập nhật các tin tức pháp lý mới nhất, những thay đổi trong luật
                pháp và các bài viết phân tích chuyên sâu từ đội ngũ luật sư của
                chúng tôi. Hãy theo dõi để luôn được thông tin và chuẩn bị tốt
                nhất cho mọi tình huống pháp lý.
              </div>
            </div>
            <div className="w-full justify-center items-center gap-8 inline-flex">
              <div className="hoverScale w-[392px] h-[522px]  p-6 bg-[#f0f0f0] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="self-stretch h-[286px] rounded-lg"
                  src={tinmoi1}
                />
                <div className="self-stretch h-max px-4 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk">
                    Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                  </div>
                  <div className="text-clamp self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">
                    Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                    nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô
                    cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy
                    tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong
                    mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và
                    tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình
                    trong lĩnh vực tư vấn và tranh tụng pháp lý.
                  </div>
                </div>
                <div className="self-stretch px-4 justify-start items-center gap-2 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-medium font-['Inter'] leading-normal">
                    3/8/2024
                  </div>
                  <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                  <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans leading-tight">
                    Laywers
                  </div>
                </div>
              </div>
              <div className="hoverScale w-[392px] h-[522px] p-6 bg-[#f0f0f0] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="self-stretch h-[286px] rounded-lg"
                  src={tinmoi2}
                />
                <div className="self-stretch h-max px-4 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk">
                    Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                  </div>
                  <div className="text-clamp self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">
                    Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                    nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô
                    cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy
                    tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong
                    mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và
                    tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình
                    trong lĩnh vực tư vấn và tranh tụng pháp lý.
                  </div>
                </div>
                <div className="self-stretch px-4 justify-start items-center gap-2 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-medium font-['Inter'] leading-normal">
                    3/8/2024
                  </div>
                  <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                  <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans leading-tight">
                    Laywers
                  </div>
                </div>
              </div>
              <div className=" hoverScale w-[392px] h-[522px] p-6 bg-[#f0f0f0] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="self-stretch h-[286px] rounded-lg"
                  src={tinmoi3}
                />
                <div className=" self-stretch h-max px-4 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk">
                    Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                  </div>
                  <div className="text-clamp self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">
                    Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                    nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô
                    cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy
                    tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong
                    mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và
                    tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình
                    trong lĩnh vực tư vấn và tranh tụng pháp lý.
                  </div>
                </div>
                <div className="self-stretch px-4 justify-start items-center gap-2 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-medium font-['Inter'] leading-normal">
                    3/8/2024
                  </div>
                  <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                  <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans leading-tight">
                    Laywers
                  </div>
                </div>
              </div>
            </div>
            <ButtonCustom
              title="Xem thêm"
              from="#40e0d0"
              to="#48d1cc"
              color="text-white"
            />
          </div>
        </section>
        <section className="">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } self-stretch h-max px-[100px] flex-col justify-start items-start gap-2.5 pb-20 flex`}
          >
            <div className="self-stretch h-max px-[200px] py-10 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch h-48 flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                  Bảo vệ Quyền lợi của Bạn <br />
                  Ngay Hôm Nay!
                </div>
                <div className="w-[654px] text-center text-white text-base font-normal font-open-sans leading-7">
                  Đừng để những vấn đề pháp lý cản trở bước tiến của bạn. Hãy để
                  Apolo Lawyers đồng hành và bảo vệ quyền lợi của bạn một cách
                  chuyên nghiệp và tận tâm.
                </div>
              </div>
              <ButtonCustom
                title="Liên hệ ngay"
                from="#fff"
                to="#fff"
                color="text-black"
              />
            </div>
          </div>
        </section>
        {/* <Notification/> */}
      </div>
    </>
  );
}
