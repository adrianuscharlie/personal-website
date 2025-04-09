const Footer = () => {
  return (
    <footer className="dark:bg-black dark:text-white">
      {/* Horizontal line */}
      <hr className="border-t text-black dark:text-white border-gray-300 dark:border-white py-1" />
      <p className="text-center text-sm dark:text-white">
        © {new Date().getFullYear()} Adrianus Charlie H.A. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
