import { TroubleShooter } from "@calcom/atoms";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Troubleshooter(props: {
  calUsername: string;
  calEmail: string;
}) {
  const router = useRouter();

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Navbar username={props.calUsername} />
      <div data-testid="troubleshooter-atom">
        <TroubleShooter
          onManageCalendarsClick={() => {
            router.push("/calendars");
          }}
          onInstallCalendarClick={() => {
            router.push("/calendars");
          }}
        />
      </div>
    </main>
  );
}
