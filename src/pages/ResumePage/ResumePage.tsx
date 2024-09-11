import { data } from "~/config/data";
import photo from "~/assets/photo.jpg";
import { ResumeTemplate1 } from "~/components/ResumeTemplate1";
import { PrintPaperContainer } from "~/components/PrintPaperContainer";

export default function ResumePage() {
  return (
    <PrintPaperContainer>
      <ResumeTemplate1 data={data} photoUrl={photo} />
    </PrintPaperContainer>
  );
}
