import ExpiryTimer from "@/components/Header/ExpiryTimer";
import { Button } from "../ui/button";

const aCx =
  "underline decoration-primary-400/0 hover:decoration-primary-400 underline-offset-4 transition-all duration-300";

export function Header() {
  return (
    <header
      id="header"
      className="w-full flex self-start items-center p-[--app-padding] justify-between"
    >
      <div className="group flex gap-8 items-center">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={aCx}
        >
          <Button variant="outline">GitHub</Button>
        </a>
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by Vansh Gulati
        </p>
      </div>
      <ExpiryTimer />
    </header>
  );
}

export default Header;
