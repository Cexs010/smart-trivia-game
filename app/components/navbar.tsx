import { useNavbar } from "../context/NavbarTitleContext";
import BackButton from "./backButton";

export default function Navbar() {
  const { title } = useNavbar();

  return (
    <nav className="w-full py-4 px-6 backdrop-blur-md shadow-lg z-50 flex items-center justify-between">
      <div className="shrink-0">
        <BackButton />
      </div>

      <h1 className="flex-1 text-center text-3xl font-semibold text-white">
        {title}
      </h1>

      <div className="w-[100px]" />
    </nav>
  );
}
