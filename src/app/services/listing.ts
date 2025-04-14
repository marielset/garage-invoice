import { Listing } from "../types/listing";

export const findListingId = (url: string | null) => {
  if (!url) return null;
  const uuidMatch = url.match(
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
  );

  const listingId = uuidMatch ? uuidMatch[0] : null;
  return listingId;
};

export const flattenListingData = (
  rawData: Record<string, Record<string, any>>
) => {
  const data = rawData.result?.listing;
  if (!data) return null;
  const listing: Listing = {
    id: data.id as string,
    name: data.listingTitle as string,
    description: data.listingDescription as string,
    price: data.sellingPrice as string,
    images: data.imageUrls as string[],
    seller: {
      id: data.user?.id,
      email: data.user?.email,
    },
    buyer: undefined,
  };
  return listing;
};
