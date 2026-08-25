import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="band">
      <footer className="sitefoot">
        <div className="footrow">
          <div>&copy; Reckon — 2025-{currentYear}</div>
          <div>
            <Link href="/how-to-use">How to use</Link>
            {' '}
            <Link href="/download">Download</Link>
            {' '}
            <Link href="/legal">Legal notice</Link>
            {' '}
            <Link href="/privacy">Privacy</Link>
            {' '}
            <Link href="https://drisschelouati.framer.website/" target="_blank">Hire me</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
