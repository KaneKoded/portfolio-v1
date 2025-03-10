import { FaHtml5 } from "react-icons/fa6";
import { TiCss3 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";
import { SiPenpot } from "react-icons/si";

const Puzzle = () => {
  return (
    <div className="skills-puzzle-grid group hover:gap-0 hover:shadow-lg hover:shadow-black/40">
      {/**Piece 1 */}
      <div className="rounded-tl-[5px] bg-cyan-800 piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <FaHtml5 className="icon" />
          Html
        </div>
        <span
          className="full-right 
        group-hover:right-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-l-8 group-hover:border-l-transparent 
        "
        ></span>
        <span className="empty-bottom group-hover:z-[-1]"></span>
      </div>

      {/**Piece 2 */}
      <div className="bg-brand-purple piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <TiCss3 className="icon" />
          Css
        </div>
        <span className="empty empty-right group-hover:z-[-1]"></span>
        <span
          className="full full-bottom 
        group-hover:bottom-[-21%] 
        group-hover:border-l-2 group-hover:border-l-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-t-8 group-hover:border-t-transparent 
        "
        ></span>
        <span className="empty empty-left group-hover:z-[-1]"></span>
      </div>

      {/**Piece 3 */}
      <div className="rounded-tr-[5px] bg-cyan-800 piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <RiTailwindCssFill className="icon" />
          TailwindCss
        </div>
        <span
          className="full full-left 
        group-hover:left-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-l-2 group-hover:border-l-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-r-8 group-hover:border-r-transparent 
        "
        ></span>
        <span className="empty empty-bottom group-hover:z-[-1]"></span>
      </div>

      {/**Piece 4 */}
      <div className="bg-brand-purple piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <IoLogoJavascript className="icon" />
          JavaScript
        </div>
        <span
          className="full full-top 
        group-hover:top-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-l-2 group-hover:border-l-brand-black/60 
        group-hover:border-b-8 group-hover:border-b-transparent 
        "
        ></span>
        <span className="empty empty-right group-hover:z-[-1]"></span>
        <span
          className="full full-bottom 
        group-hover:bottom-[-21%] 
        group-hover:border-l-2 group-hover:border-l-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-t-8 group-hover:border-t-transparent 
        "
        ></span>
      </div>

      {/**Piece 5 */}
      <div className="bg-cyan-800 piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <GrReactjs className="icon" />
          ReactJS
        </div>
        <span className="empty empty-top group-hover:z-[-1]"></span>
        <span
          className="full full-right 
        group-hover:right-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-l-8 group-hover:border-l-transparent 
        "
        ></span>
        <span className="empty empty-bottom group-hover:z-[-1]"></span>
        <span
          className="full full-left 
        group-hover:left-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-l-2 group-hover:border-l-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-r-8 group-hover:border-r-transparent
        "
        ></span>
      </div>

      {/**Piece 6 */}
      <div className="bg-brand-purple piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <FaNodeJs className="icon" />
          NodeJS
        </div>
        <span
          className="full full-top 
        group-hover:top-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-l-2 group-hover:border-l-brand-black/60 
        group-hover:border-b-8 group-hover:border-b-transparent 
        "
        ></span>
        <span
          className="full full-bottom 
        group-hover:bottom-[-21%] 
        group-hover:border-l-2 group-hover:border-l-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-t-8 group-hover:border-t-transparent 
        "
        ></span>
        <span className="empty empty-left group-hover:z-[-1]"></span>
      </div>

      {/**Piece 7 */}
      <div className="rounded-bl-[5px] bg-cyan-800 piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <VscVscode className="icon" />
          VSCode
        </div>
        <span className="empty empty-top group-hover:z-[-1]"></span>
        <span
          className="full full-right 
        group-hover:right-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-l-8 group-hover:border-l-transparent
        "
        ></span>
      </div>

      {/**Piece 8 */}

      <div className="bg-brand-purple piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <DiPhotoshop className="icon" />
          PhotoShop
        </div>
        <span
          className="full full-top 
        group-hover:top-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-r-2 group-hover:border-r-brand-black/60 
        group-hover:border-l-2 group-hover:border-l-brand-black/60 
        group-hover:border-b-8 group-hover:border-b-transparent 
        "
        ></span>
        <span className="empty empty-right group-hover:z-[-1]"></span>
        <span className="empty empty-left group-hover:z-[-1]"></span>
      </div>

      {/**Piece 9 */}
      <div className="rounded-br-[5px] bg-cyan-800 piece group-hover:border-[1px] group-hover:border-brand-black/80 group-hover:bg-dark-gray">
        <div className="skill">
          <SiPenpot className="icon" />
          Penpot
        </div>
        <span className="empty empty-top group-hover:z-[-1]"></span>
        <span
          className="full full-left 
        group-hover:left-[-21%] 
        group-hover:border-t-2 group-hover:border-t-brand-black/60  
        group-hover:border-l-2 group-hover:border-l-brand-black/60 
        group-hover:border-b-2 group-hover:border-b-brand-black/60 
        group-hover:border-r-8 group-hover:border-r-transparent
        "
        ></span>
      </div>
    </div>
  );
};

export default Puzzle;
