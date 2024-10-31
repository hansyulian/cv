import {
  IconPhone,
  IconMail,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMinus,
  IconPlus,
  IconBriefcase,
  IconProps as BaseIconProps,
  IconMapPin,
  IconCircle,
  IconBrandWhatsapp,
  IconCode,
  IconSearch,
  IconCalendar,
} from "@tabler/icons-react";

const iconMap = {
  location: IconMapPin,
  phone: IconPhone,
  email: IconMail,
  linkedin: IconBrandLinkedin,
  telegram: IconBrandTelegram,
  github: IconBrandGithub,
  plus: IconPlus,
  minus: IconMinus,
  company: IconBriefcase,
  circle: IconCircle,
  whatsapp: IconBrandWhatsapp,
  project: IconBriefcase,
  code: IconCode,
  search: IconSearch,
  calendar: IconCalendar,
};

export type IconNames = keyof typeof iconMap;

export type IconProps = {
  name: IconNames;
} & BaseIconProps;

export const Icon = (props: IconProps) => {
  const { name, ...rest } = props;
  const IconComponent = iconMap[name];
  return <IconComponent {...rest} />;
};
