import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "orange",
      }}
    >
      <ConnectButton showBalance={true} />
    </div>
  );
}
