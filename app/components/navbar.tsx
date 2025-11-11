import { useNavbar } from "../context/NavbarTitleContext";

export default function Navbar() {
  const { title } = useNavbar();

  return (
    <nav className="w-full py-6 backdrop-blur-md shadow-lg z-50">
      <h1 className="text-center text-3xl font-semibold text-white">{title}</h1>
    </nav>
  );
}