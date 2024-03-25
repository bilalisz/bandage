export const generalLinks = [
  { id: 1, label: "About Us", url: "#" },
  { id: 2, label: "Carrier", url: "#" },
  { id: 3, label: "We are hiring", url: "#" },
  { id: 4, label: "Blog", url: "#" },
];
export const featuredLinks = [
  { id: 1, label: "Business Marketing", url: "#" },
  { id: 2, label: "User Analytic", url: "#" },
  { id: 3, label: "Live Chat", url: "#" },
  { id: 4, label: "Unlimited Support", url: "#" },
];
export const resourceLinks = [
  { id: 1, label: "IOS & Android", url: "#" },
  { id: 2, label: "Watch a Demo", url: "#" },
  { id: 3, label: "Customers", url: "#" },
  { id: 4, label: "API", url: "#" },
];

export const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number
): number => {
  const discountAmount = price * (discountPercentage / 100);

  const discountedPrice = price - discountAmount;

  return Math.round(discountedPrice * 100) / 100;
};

export const formatPrice = (price: number | undefined): string => {
  if (price === undefined || price === null) {
    return "0.00";
  }
  const parts = price?.toFixed(2).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
