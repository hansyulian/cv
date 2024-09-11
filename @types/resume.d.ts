type Resume = {
  profile: ResumeProfile;
  references?: ResumeReference[];
  experiences?: ResumeExperience[];
  socialMedia?: ResumeSocialMedia[];
  languages?: ResumeLanguage[];
  educations?: ResumeEducation[];
  skills?: ResumeSkill[];
  extra?: string[];
};

type ResumeProfile = {
  name: string;
  title?: string;
  phone: string;
  email: string;
  address: string;
  summary?: string;
};

type ResumeSocialMedia = {
  type: "linkedin" | "github" | "telegram";
  url: string;
};

type ResumeLanguage = {
  language: string;
  level: "native" | "professional" | "limited" | "elementary" | "basic";
};

type ResumeReference = {
  name: string;
  designation: string;
  email?: string;
  phone?: string;
};

type ResumeExperience = {
  title: string;
  company: string;
  location: string;
  remote?: boolean;
  start: SimpleDate;
  end?: SimpleDate;
  description?: string[];
  achievements?: string[];
  technologies?: string[];
  projects?: ResumeExperienceProject[];
};

type ResumeExperienceProject = {
  name: string;
  url?: string[];
  description?: string;
  start?: SimpleDate;
  end?: SimpleDate;
};

type ResumeEducation = {
  institution: string;
  location: string;
  graduationDate?: SimpleDate;
  startDate?: SimpleDate;
  degree: string;
  verdict: string;
};

type ResumeSkill = {
  name: string;
  level: ScaleOfTen;
  periods?: ResumeSkillPeriod[];
};

type ResumeSkillPeriod = {
  start: SimpleDate;
  end?: SimpleDate;
};
