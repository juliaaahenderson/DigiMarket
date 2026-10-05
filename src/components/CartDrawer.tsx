'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartSubtotal, cartTotalCount } = useShop();

  if (!isCartOpen) return null;

  const bundleDifference = 201;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-4 sm:p-6 bg-[#183C3A] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D5A84C]" />
              <h2 className="font-heading font-extrabold text-lg">Your Shopping Cart</h2>
              <span className="bg-[#D97757] text-white text-xs font-extrabold px-2 py-0.5 rounded-full">
                {cartTotalCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Promotional Incentive Banner */}
          <div className="bg-[#F7F4EE] border-b border-[#E8E2D8] p-3 text-center text-xs font-semibold text-[#162321] flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D97757] shrink-0" />
            <span>
              You're <strong className="text-[#D97757]">₹{bundleDifference}</strong> away from unlocking today's bundle offer!
            </span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 divide-y divide-[#E8E2D8]">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F7F4EE] rounded-full mx-auto flex items-center justify-center text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#162321]">
                  Your cart is empty
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Explore our digital products catalog and grab discount software licenses today.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block bg-[#183C3A] text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-md"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                  <div className="relative w-16 h-16 bg-[#F7F4EE] rounded-lg overflow-hidden shrink-0 border border-[#E8E2D8]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-heading text-xs font-extrabold text-[#162321] line-clamp-1">
                      {item.product.name}
                    </h4>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {item.selectedLicense || '1 Device License'}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E8E2D8] rounded-md text-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-[#162321]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-extrabold text-[#183C3A] font-heading">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-[#D97757] p-1.5"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-[#F7F4EE] border-t border-[#E8E2D8] space-y-4">
              <div className="space-y-1.5 text-xs text-[#162321]">
                <div className="flex justify-between font-medium">
                  <span>Subtotal:</span>
                  <span className="font-bold">₹{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium text-emerald-700">
                  <span>Instant Delivery Fee:</span>
                  <span className="font-bold">FREE</span>
                </div>
                <div className="flex justify-between font-heading text-base font-extrabold text-[#183C3A] pt-2 border-t border-[#E8E2D8]">
                  <span>Total Amount:</span>
                  <span>₹{cartSubtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-[#D97757] hover:bg-[#c46445] text-white py-3.5 rounded-xl font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-white border border-[#E8E2D8] text-[#162321] py-2.5 rounded-xl text-xs font-bold hover:bg-[#E8E2D8] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted Instant Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
