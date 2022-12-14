import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import COVER_IMAGE from "assets/cover-image.jpg";
import ReplyIcon from "@mui/icons-material/Reply";
import { Button, TextField } from "components/core";
import IMAGE from "assets/image.jpg";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  return (
    <>
      <div className="flex flex-col bg-[#fff] mt-[60px] mx-[280px] mb-[30px]">
        <h1 className="text-[40px] font-bold">Titulo da noticia</h1>
        <div className="flex flex-row mt-[20px] items-center">
          <span className="text-[#22c55e] font-bold">Sustentabilidade</span>
          <span className="mx-[24px] text-[#9397ad]">12 hours ago</span>
          <div className="flex items-center justify-center">
            <ThumbUpOffAltIcon
              style={{ color: "#9397ad", width: "18px", height: "18px" }}
            />
            <span className="ml-[4px] mr-[10px] text-[#9397ad]">8</span>
            <ChatBubbleOutlineIcon
              style={{ color: "#9397ad", width: "18px", height: "18px" }}
            />
            <span className="ml-[4px] text-[#9397ad]">8</span>
          </div>
        </div>
      </div>
      <div>
        <img src={COVER_IMAGE} className="h-[100vh] w-[100%]" alt="" />
      </div>
      <div className="flex flex-col bg-[#fff] mt-[60px] mx-[280px] mb-[30px]">
        <h3 className="text-[20px] font-bold mb-[32px]">
          Est quis sit phasellus proin proin fringilla eu quis. Placerat
          praesent blandit urna eu pellentesque dictum. Aliquam duis quam
          interdum quis. Urna, rutrum aenean lacus phasellus. Ipsum, ac
          porttitor lacus orci, cras lacus, quis leo.
        </h3>
        <h2 className="text-[24px] mb-[16px] font-bold">Titulo da noticia</h2>
        <p className="text-[16px] mb-[32px]">
          Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque
          id in metus volutpat. Urna eget velit venenatis, commodo eget massa.
          Magna donec dictum cras nullam platea. Diam rhoncus massa lectus
          pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat
          elit condimentum integer tortor porttitor justo vel lobortis risus.
          Lacinia pellentesque fermentum tellus orci mauris, velit duis eget.
          Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante
          orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet
          nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum
          sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi,
          tellus amet est nascetur habitant faucibus ornare et vivamus.
        </p>
        <div>
          <img
            src={COVER_IMAGE}
            className="w-[100%] rounded-md h-[650px]"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[100px] flex flex-col bg-[#fff] mx-[280px] mb-[30px]">
        <h1 className="text-[40px] font-bold mb-[16px]">3 Coment??rios</h1>
        <div className="flex flex-col mt-[24px] mb-[12px] ">
          <div className="flex flex-row mb-[12px] justify-between">
            <div className="flex flex-col">
              <h6 className="text-[16px]">Nome do usu??rio</h6>
              <p className="text-[14px] text-[#9397ad]">4 minutos atr??s</p>
            </div>
            <div className="flex flex-row">
              <ReplyIcon
                style={{ color: "#565973", width: "20px", height: "20px" }}
              />
              <p className="ml-[4px] text-[14px] text-[#565973]">Responder</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-[#565973]">
              Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper
              dolor sit mauris. Hendrerit eu libero, eu tristique sodales
              ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh
              at. Neque lobortis quis porta integer et placerat lectus
              scelerisque. Velit eget malesuada morbi faucibus at sed euismod.
              Tortor, eu ut id tincidunt leo placerat luctus.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[24px] mb-[12px] ">
          <div className="flex flex-row mb-[12px] justify-between">
            <div className="flex flex-col">
              <h6 className="text-[16px]">Nome do usu??rio</h6>
              <p className="text-[14px] text-[#9397ad]">01/02/2022 04:00:23</p>
            </div>
            <div className="flex flex-row">
              <ReplyIcon
                style={{ color: "#565973", width: "20px", height: "20px" }}
              />
              <p className="ml-[4px] text-[14px] text-[#565973]">Responder</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-[#565973]">
              Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper
              dolor sit mauris. Hendrerit eu libero, eu tristique sodales
              ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh
              at. Neque lobortis quis porta integer et placerat lectus
              scelerisque. Velit eget malesuada morbi faucibus at sed euismod.
              Tortor, eu ut id tincidunt leo placerat luctus.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#fff] mx-[280px] mb-[48px]">
        <div className="m-[48px]">
          <h1 className="text-[32px] font-bold mb-[40px]">
            Deixe um coment??rio
          </h1>
          <TextField
            fullWidth
            variant="outlined"
            className="rounded-md"
            multiline
            rows={3}
            placeholder="Escreva seu coment??rio aqui..."
          />
          <Button
            variant="contained"
            className="w-[200px] h-[52px]"
            style={{ backgroundColor: "#13aa48", marginTop: "40px" }}
          >
            <span className="font-semibold">Enviar coment??rio</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col bg-[#fff] mx-[280px] mb-[48px]">
        <div className="flex flex-row justify-between">
          <h1 className="text-[40px] font-bold mb-[40px]">Related Articles</h1>
          <Button
            className="w-[300px] h-[52px]"
            style={{ color: "#13aa48", borderColor: "#13aa48" }}
            component={Link}
            to={"/feed"}
            variant="outlined"
          >
            Voltar para o feed de not??cias
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div>
              <img
                src={IMAGE}
                className="w-[100%] rounded-md h-[300px] w-[416px]"
                alt=""
              />
            </div>
            <div className="m-[24px]">
              <div className="flex flex-row justify-between mb-[16px]">
                <p className="text-[14px]  text-[#33354d] font-bold">
                  Sustentabilidade
                </p>
                <p className="text-[14px] text-[#9397ad]">01/02/2022</p>
              </div>
              <p className="text-[20px] text-[#33354d] font-bold">
                T??tulo da not??cia
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <img
                src={IMAGE}
                className="w-[100%] rounded-md h-[300px] w-[416px]"
                alt=""
              />
            </div>
            <div className="m-[24px]">
              <div className="flex flex-row justify-between mb-[16px]">
                <p className="text-[14px]  text-[#33354d] font-bold">
                  Sustentabilidade
                </p>
                <p className="text-[14px] text-[#9397ad]">01/02/2022</p>
              </div>
              <p className="text-[20px] text-[#33354d] font-bold">
                T??tulo da not??cia
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <img
                src={IMAGE}
                className="w-[100%] rounded-md h-[300px] w-[416px]"
                alt=""
              />
            </div>
            <div className="m-[24px]">
              <div className="flex flex-row justify-between mb-[16px]">
                <p className="text-[14px]  text-[#33354d] font-bold">
                  Sustentabilidade
                </p>
                <p className="text-[14px] text-[#9397ad]">01/02/2022</p>
              </div>
              <p className="text-[20px] text-[#33354d] font-bold">
                T??tulo da not??cia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
