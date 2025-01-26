import CustomerSearch from "@/app/(rs)/customers/customer-search";
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResult";
import * as Sentry from "@sentry/node";

export const metadata = {
  title: "Customer Search",
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  const span = Sentry.startInactiveSpan({ name: "getCustomerSearchResults-1" });

  const results = await getCustomerSearchResults(searchText);

  span.end();

  return (
    <>
      <CustomerSearch />
      <p>{JSON.stringify(results)}</p>
    </>
  );
}
