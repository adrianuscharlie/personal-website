const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Horizontal line */}
      <hr className="border-t text-white border-white py-1" />
      <p className="text-center text-smtext-white">
        © {new Date().getFullYear()} Adrianus Charlie H.A. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
