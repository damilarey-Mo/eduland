"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCurrentUser } from '@/lib/auth/client';
import { PropertyType, PropertyStatus } from '@/lib/types/property';

export default function AddPropertyPage() {
  const router = useRouter();
  const { user, loading, isAuthenticated } = useCurrentUser();
  
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'apartment' as PropertyType,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    squareFeet: 0,
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    amenities: [] as string[],
    basePrice: 100,
    cleaningFee: 50,
    serviceFee: 20,
    weeklyDiscount: 0,
    monthlyDiscount: 0,
    currency: 'USD',
    instantBooking: true,
    minimumStay: 1,
    maximumStay: 30,
    images: [] as string[], // These would be file uploads in a real app
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  // Handle amenity toggle
  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => {
      const amenities = [...prev.amenities];
      if (amenities.includes(amenity)) {
        return { ...prev, amenities: amenities.filter(a => a !== amenity) };
      } else {
        return { ...prev, amenities: [...amenities, amenity] };
      }
    });
  };
  
  // Handle image upload (mock)
  const handleImageUpload = () => {
    // In a real app, this would handle file uploads
    // For demo purposes, just add placeholder images
    const mockImages = [
      '/assets/apartments/apartment-1.jpg',
      '/assets/apartments/apartment-2.jpg',
    ];
    
    setFormData(prev => ({
      ...prev,
      images: mockImages,
      mainImage: mockImages[0]
    }));
    
    setSuccessMessage('Images uploaded successfully!');
    setTimeout(() => setSuccessMessage(null), 3000);
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real app, this would send data to your API
      console.log('Submitting property data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success!
      setSuccessMessage('Property added successfully!');
      
      // Redirect to listings page after delay
      setTimeout(() => {
        router.push('/agent-dashboard/listings');
      }, 2000);
      
    } catch (err) {
      console.error('Error adding property:', err);
      setError('Failed to add property. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Navigate between form steps
  const nextStep = () => setFormStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setFormStep(prev => Math.max(prev - 1, 1));
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
          <p className="mt-2 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Authentication Required</h2>
          <p className="text-gray-400 mb-6">Please log in to add properties.</p>
          <Link 
            href="/login" 
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  
  // If user is not an agent, show unauthorized message
  if (user?.role?.toLowerCase() !== 'agent') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-6">You don't have permission to add properties.</p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/agent-dashboard" className="text-sm text-yellow-400 hover:text-yellow-500">
          ← Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-white mt-2">
          Add New Property
        </h1>
        <p className="mt-1 text-gray-400">
          Fill in the details to list your property
        </p>
      </div>
      
      {/* Form Progress */}
      <div className="relative mb-8">
        <div className="h-1 w-full bg-gray-800 rounded-full">
          <div 
            className="h-1 bg-yellow-400 rounded-full transition-all duration-300" 
            style={{ width: `${(formStep / 4) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <div 
            className={`text-sm ${formStep >= 1 ? 'text-yellow-400' : 'text-gray-500'}`}
          >
            Basic Info
          </div>
          <div 
            className={`text-sm ${formStep >= 2 ? 'text-yellow-400' : 'text-gray-500'}`}
          >
            Location
          </div>
          <div 
            className={`text-sm ${formStep >= 3 ? 'text-yellow-400' : 'text-gray-500'}`}
          >
            Amenities
          </div>
          <div 
            className={`text-sm ${formStep >= 4 ? 'text-yellow-400' : 'text-gray-500'}`}
          >
            Pricing & Photos
          </div>
        </div>
      </div>
      
      {/* Error or Success Messages */}
      {error && (
        <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}
      
      {successMessage && (
        <div className="bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-md mb-6">
          {successMessage}
        </div>
      )}
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-black border border-gray-800 rounded-lg p-6">
        {/* Step 1: Basic Info */}
        {formStep === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
                Property Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g. Luxury Downtown Apartment"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe your property in detail..."
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-1">
                  Property Type *
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="loft">Loft</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="squareFeet" className="block text-sm font-medium text-gray-400 mb-1">
                  Square Feet
                </label>
                <input
                  type="number"
                  id="squareFeet"
                  name="squareFeet"
                  value={formData.squareFeet}
                  onChange={handleChange}
                  min="0"
                  placeholder="e.g. 800"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-400 mb-1">
                  Bedrooms *
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-400 mb-1">
                  Bathrooms *
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.5"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="maxGuests" className="block text-sm font-medium text-gray-400 mb-1">
                  Max Guests *
                </label>
                <input
                  type="number"
                  id="maxGuests"
                  name="maxGuests"
                  value={formData.maxGuests}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2: Location */}
        {formStep === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-400 mb-1">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="e.g. 123 Main St"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="e.g. New York"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-400 mb-1">
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. NY"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-1">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="e.g. USA"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-400 mb-1">
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="e.g. 10001"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Step 3: Amenities */}
        {formStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Select Available Amenities</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['wifi', 'airConditioning', 'heating', 'tv', 'kitchen', 'washer', 
                'dryer', 'parking', 'elevator', 'pool', 'gym', 'workspace', 
                'petFriendly', 'smoking', 'balcony', 'garden'].map(amenity => (
                <div key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="w-4 h-4 text-yellow-400 border-gray-700 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor={amenity} className="text-sm text-gray-300 capitalize">
                    {amenity.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>
            
            <div>
              <label htmlFor="minimumStay" className="block text-sm font-medium text-gray-400 mb-1">
                Minimum Stay (nights) *
              </label>
              <input
                type="number"
                id="minimumStay"
                name="minimumStay"
                value={formData.minimumStay}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="maximumStay" className="block text-sm font-medium text-gray-400 mb-1">
                Maximum Stay (nights, optional)
              </label>
              <input
                type="number"
                id="maximumStay"
                name="maximumStay"
                value={formData.maximumStay}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="instantBooking"
                name="instantBooking"
                checked={formData.instantBooking}
                onChange={handleChange}
                className="w-4 h-4 text-yellow-400 border-gray-700 rounded focus:ring-yellow-500"
              />
              <label htmlFor="instantBooking" className="text-sm text-gray-300">
                Allow instant booking (guests can book without approval)
              </label>
            </div>
          </div>
        )}
        
        {/* Step 4: Pricing & Photos */}
        {formStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Pricing Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="basePrice" className="block text-sm font-medium text-gray-400 mb-1">
                  Base Price (per night) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="basePrice"
                    name="basePrice"
                    value={formData.basePrice}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="e.g. 100"
                    className="w-full pl-8 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-400 mb-1">
                  Currency *
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cleaningFee" className="block text-sm font-medium text-gray-400 mb-1">
                  Cleaning Fee *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="cleaningFee"
                    name="cleaningFee"
                    value={formData.cleaningFee}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="e.g. 50"
                    className="w-full pl-8 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="serviceFee" className="block text-sm font-medium text-gray-400 mb-1">
                  Service Fee *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="serviceFee"
                    name="serviceFee"
                    value={formData.serviceFee}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="e.g. 20"
                    className="w-full pl-8 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="weeklyDiscount" className="block text-sm font-medium text-gray-400 mb-1">
                  Weekly Discount (%)
                </label>
                <input
                  type="number"
                  id="weeklyDiscount"
                  name="weeklyDiscount"
                  value={formData.weeklyDiscount}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="monthlyDiscount" className="block text-sm font-medium text-gray-400 mb-1">
                  Monthly Discount (%)
                </label>
                <input
                  type="number"
                  id="monthlyDiscount"
                  name="monthlyDiscount"
                  value={formData.monthlyDiscount}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  placeholder="e.g. 20"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-medium text-white mb-4">Property Photos</h3>
              
              {formData.images && formData.images.length > 0 ? (
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={image} 
                          alt={`Property image ${index + 1}`} 
                          className="w-full h-24 object-cover rounded-md"
                        />
                        {index === 0 && (
                          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                            Main Image
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">These are sample images for demonstration purposes.</p>
                </div>
              ) : (
                <div className="text-center p-8 border border-dashed border-gray-700 rounded-md">
                  <p className="text-gray-400 mb-4">No images uploaded yet</p>
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                  >
                    Upload Images (Demo)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {formStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain space
          )}
          
          {formStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Add Property'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 