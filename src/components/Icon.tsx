import {
  IconLocation,
  IconPhone,
  IconMail,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";

const iconMap = {
  location: IconLocation,
  phone: IconPhone,
  email: IconMail,
  linkedin: IconBrandLinkedin,
  telegram: IconBrandTelegram,
  github: IconBrandGithub,
  plus: IconPlus,
  minus: IconMinus,
};

export type IconNames = keyof typeof iconMap;

export type IconProps = {
  name: IconNames;
};

export const Icon = (props: IconProps) => {
  const { name, ...rest } = props;
  const IconComponent = iconMap[name];
  return <IconComponent {...rest} />;
};
