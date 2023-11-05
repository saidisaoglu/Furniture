import VlogScss from "./Vlog.module.scss";
import VlogSectionCarousel from "./VlogSectionCarousel";
import VectorImg from "../../Images/VlogCompImg/VectorImg.png";
export default function Vlog() {
  return (
    <section className={VlogScss.VlogSection}>
      <div className={VlogScss.VlogSectionHeader}>
        <h2>Vloglar</h2>
        <img src={VectorImg} alt="" />
      </div>
      <VlogSectionCarousel />
    </section>
  );
}
