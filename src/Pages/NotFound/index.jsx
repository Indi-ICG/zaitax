import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <MagnifyingGlassIcon className="w-20 h-20" />
      <p className="w-full text-center text-xl">Pagina no encontada</p>
    </div>
  );
}

export default NotFound;
