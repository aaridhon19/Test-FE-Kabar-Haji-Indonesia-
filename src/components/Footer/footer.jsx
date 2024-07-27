export default function Footer() {
    return (
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div
          className="text-center p-4 shadow-inner"
          style={{ backgroundColor: "#FFFFFF", color: "#828282" }}
        >
          © 2024 Copyright {}
          <a
            className="text-body "
            href="https://www.linkedin.com/in/adam-rizqi-romadhon-6962b51bb"
          >
            <button
              className="tracking-wide inline-flex flex-grow-0 flex-shrink-0 justify-center items-center focus:outline-none focus:ring-1 active:ring-0 focus:ring-offset-0 disabled:bg-stroke disabled:text-gray disabled:cursor-not-allowed space-x-2 h-10 text-sm bg-transparent focus:bg-transparent focus:ring-transparent border-1.5 border-transparent px-1 text-primary focus:text-primary/75 !w-auto !min-w-fit !py-0.5 normal-case"
              type="button"
            >
              <span
                className="tracking-[0.03em] leading-none"
                style={{ color: "#1EBAEE" }}
              >
                Adam Rizqi Romadhon
              </span>
            </button>
          </a>
        </div>
      </footer>
    );
  }
  