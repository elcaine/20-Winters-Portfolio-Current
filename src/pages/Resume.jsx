import ResumeDoc from '../assets/ResumeDoc.pdf';
import graphic from '../assets/growGraphic.jpg';

export default function Resume() {
  return (
    <>
    <div>
      <iframe src={`${ResumeDoc}#view=fitH`} width="100%" height="800px" title='winters-resume'/>
    </div>

    <div>
      <img src={graphic} alt="Inspirational and techy graphic" />
    </div>
    </>
  );
}
