// Dovezile se deschid cu o parolă; în cod păstrăm doar hash-ul ei (SHA-256)
import { useState } from "react";

const PROOF_HASH = "bf4403ae94febabaa85d6ec2f425ce91a041327d5f1a0e2804eb86c17ebc28d7";
const sha256 = async (text) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

export function PasswordGate({ children }) {
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [wrong, setWrong] = useState(false);
  const unlock = async (e) => {
    e.preventDefault();
    if ((await sha256(pass)) === PROOF_HASH) setOpen(true);
    else setWrong(true);
  };
  if (open) return children;
  return (
    <form className="lock" onSubmit={unlock}>
      <label htmlFor="proof-pass">Parola pentru dovezi</label>
      <div>
        <input id="proof-pass" type="password" value={pass} onChange={(e) => { setPass(e.target.value); setWrong(false); }} autoComplete="off" />
        <button type="submit">Deschide</button>
      </div>
      {wrong && <p className="lock-err">Parola nu este corectă.</p>}
    </form>
  );
}
