type Resume = {
  profile: ResumeProfile;
  references?: ResumeReference[];
  experiences?: ResumeExperience[];
  socialMedia?: ResumeSocialMedia[];
  languages?: ResumeLanguage[];
  educations?: ResumeEducation[];
  skills?: ResumeSkill[];
  notableAccomplishments?: string[];
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
  type: SocialMedia;
  url: string;
};

type ResumeLanguage = {
  language: string;
  proficiency: LanguageProficiency;
};

type ResumeReference = {
  name: string;
  designation: string;
  email?: string;
  phone?: string;
};

type ResumeExperience = SimpleDuration & {
  title: string;
  company: string;
  location: string;
  remote?: boolean;
  description?: string[];
  achievements?: string[];
  technologies?: string[];
  projects?: ResumeExperienceProject[];
  start: SimpleDate;
};

type ResumeExperienceProject = {
  name: string;
  urls?: string[];
  description?: string;
  start?: SimpleDate;
  end?: SimpleDate;
};

type ResumeEducation = SimpleDuration & {
  institution: string;
  location: string;
  end?: SimpleDate;
  start?: SimpleDate;
  degree: string;
  verdict: string;
  description?: string[];
};

type ResumeSkill = {
  name: string;
  level: ScaleOfTen;
  periods?: ResumeSkillPeriod[];
};

type ResumeSkillPeriod = SimpleDuration;
