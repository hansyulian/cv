import photo from "~/assets/photo.jpg";
import { ResumeTemplate1 } from "~/components/ResumeTemplate1";
import { PrintPaperContainer } from "~/components/PrintPaperContainer";
import { useEffect, useState } from "react";
import { dataUrl } from "~/config/constants";
import { data } from "~/config/data";

export default function ResumePage() {
  const [resume, setResume] = useState<Resume>();

  useEffect(() => {
    async function reloadResumeData() {
      let result = data;
      if (dataUrl !== "local") {
        const response = await fetch(dataUrl);
        result = await response.json();
      }
      setResume(result);
    }
    reloadResumeData();
  }, []);

  if (!resume) {
    return null;
  }
  return (
    <PrintPaperContainer>
      <ResumeTemplate1 data={resume} photoUrl={photo} />
    </PrintPaperContainer>
  );
}
