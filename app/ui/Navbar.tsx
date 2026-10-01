const linkClasses =
  "text-[1em] no-underline transition-[color_0.3s_ease,transform_2s_linear] hover:block hover:scale-[1.01] hover:text-[#0056ac]";

export default function NavBar() {
  return (
    <nav className="fixed top-[15px] left-1/2 -translate-x-1/2 rounded-[10rem] min-w-[130px] border-b border-gray-200 dark:border-gray-700">
      <ul className="m-0 p-4 flex flex-nowrap justify-center gap-[2em] whitespace-nowrap list-none">
        <li className="text-2xl">
          <a href="#home" className={linkClasses}>
            Home
          </a>
        </li>
        <li className="text-2xl">
          <a href="#about" className={linkClasses}>
            About
          </a>
        </li>
        <li className="text-2xl">
          <a href="#projects" className={linkClasses}>
            Projects
          </a>
        </li>
        <li className="text-2xl">
          <a href="#contact" className={linkClasses}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
