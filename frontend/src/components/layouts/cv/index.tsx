import CVHeader from "./CVHeader";
import CVFooter from "./CVFooter";

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <CVHeader /> */}
      <div>{children}</div>
      {/* <CVFooter /> */}
    </>
  );
}
