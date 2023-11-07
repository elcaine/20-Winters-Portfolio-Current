// Source:  https://pixabay.com/illustrations/steering-computer-science-7673519/
import graphic from '../assets/growGraphic.jpg';
import ResumeDoc from '../assets/ResumeDoc.pdf';

export default function Resume() {
  return (
    <>
    <div>
      <iframe src={`${ResumeDoc}#view=fitH`} width="100%" height="800px" title='winters-resume'/>
    </div>

    <div>
      <img src={graphic} alt="Inspirational and techy graphic" style={{ 
        maxWidth: "75%",
        paddingTop: "50px",
        paddingBottom: "130px",
        }}
/>
    </div>
    </>
  );
}
