import { Archivo_Black, Archivo } from "next/font/google";

const archivoBlack_init = Archivo({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-archivoB",
});

export const archivoB = archivoBlack_init.variable;
