import EmptyLayout from "../(landing)/layout";
import { RootNavigation } from "../../components/RootNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EmptyLayout>
      <RootNavigation />
      {children}
    </EmptyLayout>
  );
}

export const runtime = "edge"
