import photo from "~/assets/photo.jpg";
import { ResumeTemplate1 } from "~/components/ResumeTemplate1";
import { PrintPaperContainer } from "~/components/PrintPaperContainer";
import { useEffect, useState } from "react";
import { dataGistUrl } from "~/config/constants";

export default function ResumePage() {
  const [resume, setResume] = useState<Resume>();

  useEffect(() => {
    async function reloadResumeData() {
      const response = await fetch(dataGistUrl);
      const data = await response.json();
      setResume(data);
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
