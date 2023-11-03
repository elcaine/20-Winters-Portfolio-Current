import ResumeDoc from '../assets/ResumeDoc.pdf';

export default function Resume() {
  return (
    <div>
      <iframe src={`${ResumeDoc}#view=fitH`} width="100%" height="800px" title='winters-resume'/>
    </div>
  );
}
