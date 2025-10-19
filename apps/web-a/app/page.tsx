import config from "../content/home.config";
import { RenderPage } from "@pkg/modules";

export default function Page() {
  return <RenderPage config={config} />;
}
