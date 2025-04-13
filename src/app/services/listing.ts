export const findListingId = (url: string | null) => {
  if (!url) return null;
  const uuidMatch = url.match(
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
  );

  const listingId = uuidMatch ? uuidMatch[0] : null;
  return listingId;
};
