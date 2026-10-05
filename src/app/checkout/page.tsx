'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useShop } from '@/context/ShopContext';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowRight, Smartphone, Building, Wallet } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartSubtotal, clearCart } = useShop();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>('upi');
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-16 text-center flex-1">
          <div className="bg-white border border-[#E8E2D8] p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h1 className="font-heading text-3xl font-extrabold text-[#162321]">
              Order Confirmed & License Keys Issued!
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you for your purchase. Your digital license keys and direct download mirrors have been generated and sent to your email.
            </p>

            <div className="bg-[#F7F4EE] p-4 rounded-2xl border border-[#E8E2D8] text-left text-xs space-y-2">
              <div className="font-bold text-[#183C3A]">Order ID: #DIGI-2026-9842</div>
              <div className="text-gray-500">License Status: <span className="text-emerald-700 font-bold">Active / Instant Delivered</span></div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/account"
                className="bg-[#183C3A] text-white font-bold text-xs px-6 py-3 rounded-xl shadow-sm hover:bg-[#122e2c]"
              >
                Go to Downloads & Licenses
              </Link>
              <Link
                href="/shop"
                className="bg-white border border-[#E8E2D8] text-[#162321] font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#F7F4EE]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <h1 className="font-heading text-3xl font-extrabold text-[#162321] mb-8">
          Instant Digital Checkout
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Customer & Payment Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Customer Information */}
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-2xl shadow-xs space-y-4">
              <h2 className="font-heading text-lg font-bold text-[#162321] flex items-center gap-2">
                1. Customer & License Delivery Info
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#162321] mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full bg-[#F7F4EE] border border-[#E8E2D8] px-3 py-2.5 rounded-xl outline-hidden focus:border-[#183C3A]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#162321] mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full bg-[#F7F4EE] border border-[#E8E2D8] px-3 py-2.5 rounded-xl outline-hidden focus:border-[#183C3A]"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-bold text-[#162321] mb-1">
                  Email Address (License Keys will be sent here)
                </label>
                <input
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  className="w-full bg-[#F7F4EE] border border-[#E8E2D8] px-3 py-2.5 rounded-xl outline-hidden focus:border-[#183C3A]"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-2xl shadow-xs space-y-4">
              <h2 className="font-heading text-lg font-bold text-[#162321]">
                2. Select Payment Option
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-[#183C3A] bg-[#183C3A] text-white shadow-xs'
                      : 'border-[#E8E2D8] bg-[#F7F4EE] text-[#162321] hover:bg-white'
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  <span>UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#183C3A] bg-[#183C3A] text-white shadow-xs'
                      : 'border-[#E8E2D8] bg-[#F7F4EE] text-[#162321] hover:bg-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'border-[#183C3A] bg-[#183C3A] text-white shadow-xs'
                      : 'border-[#E8E2D8] bg-[#F7F4EE] text-[#162321] hover:bg-white'
                  }`}
                >
                  <Building className="w-5 h-5" />
                  <span>NetBanking</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('wallet')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'wallet'
                      ? 'border-[#183C3A] bg-[#183C3A] text-white shadow-xs'
                      : 'border-[#E8E2D8] bg-[#F7F4EE] text-[#162321] hover:bg-white'
                  }`}
                >
                  <Wallet className="w-5 h-5" />
                  <span>Wallets</span>
                </button>
              </div>

              <div className="p-4 bg-[#F7F4EE] rounded-xl border border-[#E8E2D8] text-xs text-gray-600">
                🔒 All transactions are secured by 256-bit SSL encryption. License keys are unlocked immediately following payment processing.
              </div>
            </div>

          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-2xl shadow-xs space-y-4">
              <h2 className="font-heading text-lg font-bold text-[#162321] pb-3 border-b border-[#E8E2D8]">
                Order Summary
              </h2>

              <div className="space-y-3 max-h-60 overflow-y-auto divide-y divide-[#E8E2D8]">
                {cart.map((item) => (
                  <div key={item.product.id} className="pt-3 first:pt-0 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#162321]">{item.product.name}</div>
                      <div className="text-gray-400">Qty: {item.quantity} × ₹{item.product.price}</div>
                    </div>
                    <div className="font-extrabold text-[#183C3A] font-heading">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E8E2D8] space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>₹{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Digital Key Delivery:</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between font-heading text-xl font-extrabold text-[#183C3A] pt-2 border-t border-[#E8E2D8]">
                  <span>Total Payable:</span>
                  <span>₹{cartSubtotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D97757] hover:bg-[#c46445] text-white py-4 rounded-xl font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                PAY ₹{cartSubtotal.toLocaleString()} & RECEIVE KEYS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
