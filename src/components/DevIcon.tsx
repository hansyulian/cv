import {
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  DockerOriginal,
  ElasticsearchOriginal,
  GitOriginal,
  GraphqlPlain,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  JestPlain,
  LaravelOriginal,
  LessPlainWordmark,
  MongodbOriginal,
  MysqlOriginal,
  Neo4jOriginal,
  NextjsOriginal,
  PhpOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  SassOriginal,
  TypescriptOriginal,
  UbuntuOriginal,
  VuejsOriginal,
} from "devicons-react";
import { FC } from "react";

const devIconMap: Record<string, FC> = {
  react: ReactOriginal,
  reactnative: ReactOriginal,
  typescript: TypescriptOriginal,
  javascript: JavascriptOriginal,
  html: Html5Original,
  css: Css3Original,
  jest: JestPlain,
  git: GitOriginal,
  ubuntu: UbuntuOriginal,
  postgresql: PostgresqlOriginal,
  ubuntuserver: UbuntuOriginal,
  scss: SassOriginal,
  docker: DockerOriginal,
  mongodb: MongodbOriginal,
  python: PythonOriginal,
  less: LessPlainWordmark,
  mysql: MysqlOriginal,
  java: JavaOriginal,
  php: PhpOriginal,
  laravel: LaravelOriginal,
  nextjs: NextjsOriginal,
  graphql: GraphqlPlain,
  "c#": CsharpOriginal,
  elasticsearch: ElasticsearchOriginal,
  "c++": CplusplusOriginal,
  neo4j: Neo4jOriginal,
  vue: VuejsOriginal,
};

export type DevIconProps = {
  value: string;
};

export function DevIcon(props: DevIconProps) {
  const simplifiedValue = props.value
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/\./g, "");
  const Component = devIconMap[simplifiedValue];
  if (!Component) {
    return null;
  }
  return <Component />;
}
