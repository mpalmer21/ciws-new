import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <Link href="/">
              <img src="/logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar-links_container"></div>
        </div>

        <div className="navbar-sign">
          <Link href="/guides">
            <p>Resources</p>
          </Link>

          <ul>
            <Link href="/">
              <button onClick={signOut} type="button">
                Sign Out
              </button>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-links_container"></div>
      </div>

      <div className="navbar-sign">
        <Link href="/guides">
          <p>Resources</p>
        </Link>

        <ul>
          <Link href="/">
            <button onClick={signIn} type="button">
              Sign in
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
