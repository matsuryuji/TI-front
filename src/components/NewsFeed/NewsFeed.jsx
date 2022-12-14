import { Button, TextField } from "components/core";
import IMAGE from "assets/image.jpg";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  return (
    <div className="flex flex-col bg-[#fff] mx-[280px] mb-[200px]">
      <div className="flex flex-row justify-between">
        <h1 className="text-[40px] font-bold mb-[40px]">Feed de notícias</h1>
      </div>
      <div className="flex flex-row justify-between w-[100%]">
        <div className="flex flex-col gap-[32px] w-[100%]">
          <div className="flex flex-row w-[100%]">
            <div className="flex">
              <img
                src={IMAGE}
                className="w-[100%] rounded-md h-[300px] w-[416px]"
                alt=""
              />
            </div>
            <div className="ml-[24px] w-[40%]">
              <div className="flex flex-col justify-between">
                <Chip
                  className="text-[14px] font-bold w-[130px] h-[24px]"
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    borderRadius: 6,
                  }}
                  label="Sustentabilidade"
                ></Chip>
                <Link to={"/"}>
                  <p className="text-[28px] text-[#33354d] font-bold my-[12px]">
                    Título da notícia
                  </p>
                </Link>
              </div>
              <p className="text-[16px] text-[#565973] mb-[24px]">
                Nunc aliquet scelerisque pellentesque imperdiet tortor elit,
                dictum. Tristique odio at dignissim viverra aliquet eleifend
                erat. Tellus, at arcu, egestas praesent.
              </p>
              <p className="text-[14px] text-[#9397ad]">01/02/2022</p>
            </div>
          </div>
          <div className="flex flex-row w-[100%]">
            <div className="flex">
              <img
                src={IMAGE}
                className="w-[100%] rounded-md h-[300px] w-[416px]"
                alt=""
              />
            </div>
            <div className="ml-[24px] w-[40%]">
              <div className="flex flex-col justify-between">
                <Chip
                  className="text-[14px] font-bold w-[130px] h-[24px]"
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    borderRadius: 6,
                  }}
                  label="Sustentabilidade"
                ></Chip>
                <Link to={"/"}>
                  <p className="text-[28px] text-[#33354d] font-bold my-[12px]">
                    Título da notícia
                  </p>
                </Link>
              </div>
              <p className="text-[16px] text-[#565973] mb-[24px]">
                Nunc aliquet scelerisque pellentesque imperdiet tortor elit,
                dictum. Tristique odio at dignissim viverra aliquet eleifend
                erat. Tellus, at arcu, egestas praesent.
              </p>
              <p className="text-[14px] text-[#9397ad]">01/02/2022</p>
            </div>
          </div>
          <div className="flex flex-row w-[100%]">
            <div className="flex">
              <img
                src={IMAGE}
                className="w-[100%] rounded-md h-[300px] w-[416px]"
                alt=""
              />
            </div>
            <div className="ml-[24px] w-[40%]">
              <div className="flex flex-col justify-between">
                <Chip
                  className="text-[14px] font-bold w-[130px] h-[24px]"
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    borderRadius: 6,
                  }}
                  label="Sustentabilidade"
                ></Chip>
                <Link to={"/"}>
                  <p className="text-[28px] text-[#33354d] font-bold my-[12px]">
                    Título da notícia
                  </p>
                </Link>
              </div>
              <p className="text-[16px] text-[#565973] mb-[24px]">
                Nunc aliquet scelerisque pellentesque imperdiet tortor elit,
                dictum. Tristique odio at dignissim viverra aliquet eleifend
                erat. Tellus, at arcu, egestas praesent.
              </p>
              <p className="text-[14px] text-[#9397ad]">01/02/2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[25%]">
          <TextField
            fullWidth
            variant="outlined"
            className="rounded-md"
            placeholder="Procurar no blog..."
            classNamew="w-[300px]"
          />
          <div
            className="flex flex-col w-[100%] h-[auto] p-[24px] mt-[24px] gap-[12px]"
            style={{ border: "1px solid #d4d7e5", borderRadius: "0.5rem" }}
          >
            <p className="text-[20px] text-[#000] font-bold">Principais tags</p>
            <p className="text-[14px] text-[#6366f1]">Todas notícias (48)</p>
            <p className="text-[14px] text-[#1a9949]">Sustentabilidade (12)</p>
            <p className="text-[14px] text-[#1a9949]">Energia (5)</p>
            <p className="text-[14px] text-[#1a9949]">Inovações (10)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
