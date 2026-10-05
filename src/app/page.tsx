'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { PromotionalDealStrip } from '@/components/PromotionalDealStrip';
import { ShopByCategory } from '@/components/ShopByCategory';
import { BestSellers } from '@/components/BestSellers';
import { FlashDeals } from '@/components/FlashDeals';
import { TrendingProducts } from '@/components/TrendingProducts';
import { FeaturedCampaignBanner } from '@/components/FeaturedCampaignBanner';
import { AntivirusSection } from '@/components/AntivirusSection';
import { EbookSection } from '@/components/EbookSection';
import { NewArrivals } from '@/components/NewArrivals';
import { WhyShopWithUs } from '@/components/WhyShopWithUs';
import { CustomerReviews } from '@/components/CustomerReviews';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { Product } from '@/types';

export default function Home() {
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-[#F7F4EE] flex flex-col font-sans">
      <Header />
      
      {/* Homepage Sections */}
      <HeroBanner />
      <PromotionalDealStrip />
      <ShopByCategory />
      <BestSellers onQuickView={(prod) => setSelectedQuickViewProduct(prod)} />
      <FlashDeals />
      <TrendingProducts onQuickView={(prod) => setSelectedQuickViewProduct(prod)} />
      <FeaturedCampaignBanner />
      <AntivirusSection />
      <EbookSection />
      <NewArrivals onQuickView={(prod) => setSelectedQuickViewProduct(prod)} />
      <WhyShopWithUs />
      <CustomerReviews />
      <Newsletter />
      <Footer />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
      />
    </main>
  );
}
