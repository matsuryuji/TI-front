import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const NewsDetail = () => {
  return(
      <div className="flex flex-col w-[100%] bg-[#fff] mt-[60px]">
        <h1 className="text-[40px] font-bold">Titulo da noticia</h1>
        <div className="flex flex-row mt-[10px] items-center">
            <span className="text-[#13aa48]">Sustentabilidade</span>
            <span className="mx-[24px] text-[#9397ad]">12 hours ago</span>
            <div className="flex items-center justify-center">
                <ThumbUpOffAltIcon style={{color:"#9397ad", width: "18px", height: "18px"}}/>
                <span className="ml-[4px] mr-[10px] text-[#9397ad]">8</span>
                <ChatBubbleOutlineIcon style={{color:"#9397ad", width: "18px", height: "18px"}}/>
                <span className="ml-[4px] text-[#9397ad]">8</span>
            </div>
        </div>
      </div>
  )
}

export default NewsDetail;