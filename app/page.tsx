import {
  AppWindow,
  ArrowRight,
  DownloadSimple,
  EyeSlash,
  Fingerprint,
  GearSix,
  Power,
  ToggleRight,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Reveal } from "./components/Reveal";
import { Shot } from "./components/Shot";
import { DMG_SIZE, DMG_URL, REQUIREMENTS, VERSION } from "./site";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShieldSection />
      <Triggers />
      <Guarded />
      <Privacy />
      <Download />
    </main>
  );
}

function DownloadButton() {
  return (
    <a className="btn btn-primary" href={DMG_URL} download>
      <DownloadSimple size={18} weight="bold" aria-hidden />
      Download for Mac
    </a>
  );
}

function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <span className="pill glass">Free for macOS 26</span>
        <h1>Lock your Mac apps while you&apos;re away.</h1>
        <p className="lede">
          Latch hides the apps you choose until Touch ID or your Mac password opens them again.
        </p>
        <div className="hero-actions">
          <DownloadButton />
          <a className="btn btn-glass glass" href="#how">
            How it works
            <ArrowRight size={16} weight="bold" aria-hidden />
          </a>
        </div>
      </div>

      <div className="hero-stage">
        <div className="stage-glow" aria-hidden />
        <Shot
          name="menu"
          alt="The Latch menu: Unlock all, and Microsoft Teams marked locked"
          width={776}
          height={786}
          priority
          className="hero-shot"
        />
        <Image className="hero-icon" src="/latch-icon.png" alt="" width={132} height={132} priority />
      </div>
    </section>
  );
}

function ShieldSection() {
  return (
    <section className="shield wrap">
      <Reveal className="shield-copy">
        <h2>Open a latched app and it stays covered.</h2>
        <p>
          The app hides, every screen blurs, and the Touch ID prompt appears. Cancel, and it stays
          hidden with Unlock one click away.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="shield-frame glass">
        <Shot
          name="shield"
          alt="Latch's cover screen: Notes is latched. Touch ID or your Mac password opens it."
          width={880}
          height={640}
        />
      </Reveal>
    </section>
  );
}

const GRACE = ["Always", "1 min", "2 min", "5 min", "15 min"];

function Triggers() {
  return (
    <section id="how" className="triggers wrap">
      <Reveal>
        <h2>It locks itself.</h2>
      </Reveal>
      <div className="bento">
        <Reveal className="cell cell-away glass">
          <div className="idle-ring" aria-hidden>
            <span>2:00</span>
          </div>
          <div>
            <h3>When you walk away</h3>
            <p>
              Two minutes without a keypress, the screen locking, the lid closing or the Mac sleeping
              latches every app at once.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="cell cell-open">
          <AppWindow size={28} weight="duotone" aria-hidden />
          <h3>Every time it opens</h3>
          <p>Quit a guarded app and the next launch asks again.</p>
        </Reveal>
        <Reveal delay={0.1} className="cell cell-switch glass">
          <h3>When you come back to it</h3>
          <p>Switch away for longer than your grace period and it asks on return.</p>
          <ul className="chips" aria-label="Grace period options">
            {GRACE.map((g) => (
              <li key={g} className={g === "2 min" ? "chip chip-on" : "chip"}>
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.14} className="cell cell-keys">
          <div className="keys" aria-label="Control Option Command L">
            {["⌃", "⌥", "⌘", "L"].map((k) => (
              <kbd key={k}>{k}</kbd>
            ))}
          </div>
          <h3>All at once</h3>
          <p>One shortcut, or Lock all in the menu bar. Unlock all takes one Touch ID.</p>
        </Reveal>
      </div>
    </section>
  );
}

const GUARDED = [
  { icon: ToggleRight, title: "Turning a guard off", body: "Switching an app off asks for Touch ID first." },
  { icon: GearSix, title: "Opening Settings", body: "Settings stay latched, and latch again when closed." },
  { icon: Power, title: "Quitting Latch", body: "Quitting from the menu bar asks for Touch ID too." },
];

function Guarded() {
  return (
    <section className="guarded wrap">
      <div className="guarded-main">
        <Reveal className="guarded-copy">
          <h2>Nobody at your desk can switch it off.</h2>
          <p>
            Adding apps and locking are instant. Anything that lowers protection waits for your
            fingerprint or password.
          </p>
        </Reveal>
        <div className="guarded-list">
        {GUARDED.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.06} className="guard-row glass">
            <span className="guard-icon">
              <Icon size={20} weight="bold" aria-hidden />
            </span>
            <span>
              <strong>{title}</strong>
              <span className="muted">{body}</span>
            </span>
            <Fingerprint className="guard-touch" size={22} weight="regular" aria-label="Asks for Touch ID" />
          </Reveal>
        ))}
        </div>
      </div>
      <Reveal delay={0.1} className="guarded-shot">
        <Shot
          name="settings"
          alt="Latch Settings: guarded apps with their options, grace period and idle time choices"
          width={857}
          height={1300}
        />
      </Reveal>
    </section>
  );
}

function Privacy() {
  return (
    <section className="privacy wrap">
      <Reveal>
        <EyeSlash size={30} weight="duotone" aria-hidden className="privacy-icon" />
        <p className="statement">
          Latch never goes online. No account, no analytics, and your fingerprint never leaves
          macOS. It only remembers which apps you guard.
        </p>
      </Reveal>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="download wrap">
      <Reveal className="download-card glass">
        <div className="download-head">
          <Image src="/latch-icon.png" alt="" width={84} height={84} />
          <div>
            <h2>Latch {VERSION}</h2>
            <p className="muted">
              {DMG_SIZE}, {REQUIREMENTS}
            </p>
          </div>
          <DownloadButton />
        </div>
        <ol className="steps">
          <li>
            <strong>Open the DMG</strong>
            <span>Drag Latch into Applications, then open it. A lock appears in your menu bar.</span>
          </li>
          <li>
            <strong>Allow it once</strong>
            <span>
              Latch isn&apos;t on the App Store yet. If macOS blocks it, open System Settings, then
              Privacy &amp; Security, and choose Open Anyway.
            </span>
          </li>
          <li>
            <strong>Pick your apps</strong>
            <span>Choose Add apps in the menu and pick the ones to guard.</span>
          </li>
        </ol>
        <p className="note">
          Latch guards the minutes you forget to lock up. Your Mac&apos;s own lock screen (⌃⌘Q) is still
          the strongest lock.
        </p>
      </Reveal>
    </section>
  );
}
