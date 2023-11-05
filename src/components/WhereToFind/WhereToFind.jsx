import Subtract from "../../Images/WhereToFindImg/Subtract.png";
import WhereToFindScss from "../WhereToFind/WhereToFind.module.scss";
import image6 from "../../Images/WhereToFindImg/image6.png";
export default function WhereToFind() {
  return (
    <section className={WhereToFindScss.WhereToFindSection}>
      <div className={WhereToFindScss.WhereToFindHeader}>
        <img src={Subtract} alt="Subtract" />
        <h2>Hardan Tapaq?</h2>
      </div>
      <div className={WhereToFindScss.WhereToFindBody}>
        <div className={WhereToFindScss.leftPart}>
          <div className={WhereToFindScss.playList}>
            <ul>
              <li>
                <img src={image6} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <img src={image6} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <img src={image6} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <img src={image6} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <img src={image6} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <img src={image6} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={WhereToFindScss.rightPart}>
          <div>
            <iframe
              width="90%"
              height="620px"
              src="https://www.youtube.com/embed/WX_k6TpUadQ?si=Ao7ZIyXQU_ifpKWA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
