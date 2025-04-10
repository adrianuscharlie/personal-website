import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Horizontal line */}

      <hr className="border-t text-white border-white py-1" />
      <div className="flex justify-center items-center gap-5">
        <Image
          src="/assets/experiences/logo_dark.png"
          alt="logo"
          width={30}
          height={30}
        />
        <p className="text-center text-smtext-white">
          © {new Date().getFullYear()} Adrianus Charlie H.A. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
