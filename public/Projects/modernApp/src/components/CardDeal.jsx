import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    {/* Text Section */}
    <div className={layout.sectionInfo}>
      {/* Header */}
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm: block hidden" />
        in few easy steps.
      </h2>
      {/* Paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus.
        Aliquet quis aliquet eget mauris tortor.
        Ć Aliquet ultrices ac, ametau.
      </p>
      {/* Button */}
      <Button styles="mt-10" />
    </div>

    {/* Image Section */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>

  </section>
)

export default CardDeal