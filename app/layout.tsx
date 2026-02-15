import type { Metadata } from "next";
import "@/app/Styles/globals.css";
import Topo from "@/app/Componentes/Topo/Topo";
import Rodape from "@/app/Componentes/Rodape/Rodape";

export const metadata: Metadata = {
  title: "Gelateria - Sorveteria Artesanal",
  description: "Sua sorveteria favorita :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo/>
          {children}
        <Rodape/>
      </body>
    </html>
  );
}
