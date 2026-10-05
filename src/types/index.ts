export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
  isFlashDeal?: boolean;
  image: string;
  badge?: string;
  features: string[];
  systemRequirements?: string[];
  platforms?: ('Windows' | 'macOS' | 'Android' | 'iOS' | 'Web')[];
  licenseOptions?: string[];
  durationOptions?: string[];
  authorOrVendor?: string;
  format?: string; // e.g. PDF, EPUB, Executable, License Key
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  itemCount: number;
  iconName: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  comment: string;
  productName: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedLicense?: string;
  selectedDuration?: string;
}
