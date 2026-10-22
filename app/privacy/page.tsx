import type { Metadata } from "next";
import { CONTACT } from "../site";

/** Bump when the policy changes. Keep it in step with what the app actually does. */
const EFFECTIVE_DATE = "22 October 2026";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Latch works entirely on your Mac. It collects nothing and never goes online.",
};

export default function Privacy() {
  return (
    <main className="doc">
      <h1>Privacy policy</h1>
      <p>Effective {EFFECTIVE_DATE}</p>

      <h2>The short version</h2>
      <p>
        Latch runs entirely on your Mac. It has no account, no analytics and no network code, so nothing
        you do in Latch is sent anywhere.
      </p>

      <h2>What Latch stores</h2>
      <p>Latch keeps its settings in your Mac&apos;s user preferences:</p>
      <ul>
        <li>The apps you chose to guard: name, bundle identifier and location on disk.</li>
        <li>Your choices for when to lock, such as the grace period and idle time.</li>
      </ul>
      <p>Deleting Latch and its preferences removes all of it.</p>

      <h2>Touch ID and your password</h2>
      <p>
        Latch asks macOS to check it&apos;s you, using Apple&apos;s LocalAuthentication framework. macOS
        shows the prompt and handles your fingerprint or password. Latch only learns whether the check
        passed. It never sees, stores or sends biometric data or passwords.
      </p>

      <h2>What Latch watches</h2>
      <p>
        To know when to lock, Latch notices which app is in front, when apps open or quit, how long since
        your last key press or click, and when the screen locks or the Mac sleeps. It uses this only in
        the moment, keeps no history, and records nothing you type.
      </p>

      <h2>This website</h2>
      <p>
        This site loads no trackers or third-party fonts. Like any web host, the server may keep standard
        access logs.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>
    </main>
  );
}
