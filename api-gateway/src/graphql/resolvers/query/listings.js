import ListingsService from "#root/adapters/ListingsService.js";

const listingsResolver = async () => {
  return await ListingsService.fetchAllListings();
};

export default listingsResolver;
