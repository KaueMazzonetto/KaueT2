// @ts-ignore: next/navigation types may be missing in this environment
import { redirect } from "next/navigation";

export default function CadastroLegacyPage() {
  redirect("/sistema/paginas/curriculos/novo");
  return null;
}
