"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCurrentUser } from '@/lib/auth/client';
import { Property } from '@/lib/types/property';
import { Building, PlusCircle, Search, Edit, Trash, Eye, Star } from 'lucide-react';

// Mock data for listings
const MOCK_LISTINGS: Property[] = [
  {
    id: 'prop_1',
    title: 'Luxury Downtown Apartment',
    description: 'Modern luxury apartment in downtown with amazing views',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    squareFeet: 1200,
    location: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001'
    },
    amenities: ['wifi', 'gym', 'pool'],
    images: ['/assets/apartments/apartment-1.jpg', '/assets/apartments/apartment-1-2.jpg'],
    mainImage: '/assets/apartments/apartment-1.jpg',
    status: 'active',
    ownerId: 'usr_2',
    pricing: {
      basePrice: 150,
      cleaningFee: 50,
      serviceFee: 30,
      weeklyDiscount: 10,
      monthlyDiscount: 20,
      currency: 'USD'
    },
    availability: [
      {
        startDate: new Date('2023-07-01'),
        endDate: new Date('2023-12-31')
      }
    ],
    instantBooking: true,
    minimumStay: 2,
    maximumStay: 30,
    averageRating: 4.8,
    reviewCount: 25,
    featured: true,
    verified: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-05-10')
  },
  {
    id: 'prop_2',
    title: 'Cozy Studio with City Views',
    description: 'A cozy studio perfect for solo travelers or couples',
    type: 'studio',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    squareFeet: 600,
    location: {
      address: '456 Park Ave',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10002'
    },
    amenities: ['wifi', 'kitchen'],
    images: ['/assets/apartments/apartment-2.jpg'],
    mainImage: '/assets/apartments/apartment-2.jpg',
    status: 'active',
    ownerId: 'usr_2',
    pricing: {
      basePrice: 95,
      cleaningFee: 35,
      serviceFee: 20,
      currency: 'USD'
    },
    availability: [
      {
        startDate: new Date('2023-06-15'),
        endDate: new Date('2023-11-30')
      }
    ],
    instantBooking: true,
    minimumStay: 2,
    maximumStay: 21,
    averageRating: 4.6,
    reviewCount: 12,
    featured: false,
    verified: true,
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2023-05-05')
  },
  {
    id: 'prop_3',
    title: 'Modern Loft in Trendy District',
    description: 'Spacious loft in the heart of the trendy district',
    type: 'loft',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 3,
    squareFeet: 900,
    location: {
      address: '789 Broadway',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10003'
    },
    amenities: ['wifi', 'kitchen', 'washer', 'dryer'],
    images: ['/assets/apartments/apartment-3.jpg'],
    mainImage: '/assets/apartments/apartment-3.jpg',
    status: 'pending',
    ownerId: 'usr_2',
    pricing: {
      basePrice: 120,
      cleaningFee: 40,
      serviceFee: 25,
      currency: 'USD'
    },
    availability: [
      {
        startDate: new Date('2023-08-01'),
        endDate: new Date('2023-12-31')
      }
    ],
    instantBooking: false,
    minimumStay: 3,
    maximumStay: 14,
    verified: false,
    createdAt: new Date('2023-06-05'),
    updatedAt: new Date('2023-06-05')
  }
];

export default function ListingsPage() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  
  // Use client-side auth hook
  const { user, loading: authLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    // Simulate fetching listings from API
    setTimeout(() => {
      setListings(MOCK_LISTINGS);
      setLoading(false);
    }, 500);
  }, []);

  // Filter and sort listings
  const filteredListings = listings
    .filter(listing => {
      // Status filter
      if (filterStatus !== 'all' && listing.status !== filterStatus) {
        return false;
      }
      
      // Search term
      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          listing.title.toLowerCase().includes(searchTermLower) ||
          listing.description.toLowerCase().includes(searchTermLower) ||
          listing.location.city.toLowerCase().includes(searchTermLower) ||
          listing.location.address.toLowerCase().includes(searchTermLower)
        );
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'price-high':
          return b.pricing.basePrice - a.pricing.basePrice;
        case 'price-low':
          return a.pricing.basePrice - b.pricing.basePrice;
        case 'rating':
          return (b.averageRating || 0) - (a.averageRating || 0);
        default:
          return 0;
      }
    });
  
  // Handle delete confirmation
  const handleDeleteClick = (id: string) => {
    setConfirmDelete(id);
  };
  
  const handleDeleteConfirm = (id: string) => {
    // In a real app, this would make an API call to delete the property
    setListings(listings.filter(listing => listing.id !== id));
    setConfirmDelete(null);
  };
  
  const handleDeleteCancel = () => {
    setConfirmDelete(null);
  };
  
  // Toggle feature status
  const toggleFeature = (id: string) => {
    setListings(
      listings.map(listing => 
        listing.id === id 
          ? { ...listing, featured: !listing.featured } 
          : listing
      )
    );
  };
  
  // Show loading state while checking authentication
  if (authLoading || loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
          <p className="mt-2 text-gray-400">Loading listings...</p>
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
          <p className="text-gray-400 mb-6">Please log in to manage your listings.</p>
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
          <p className="text-gray-400 mb-6">You don't have permission to access agent listings.</p>
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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <Link href="/agent-dashboard" className="text-sm text-yellow-400 hover:text-yellow-500">
            ← Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-white mt-2">
            Manage Your Properties
          </h1>
          <p className="mt-1 text-gray-400">
            View, edit, and manage your property listings
          </p>
        </div>
        <Link 
          href="/agent-dashboard/add-property"
          className="flex items-center px-4 py-2 bg-[#f3e17b] hover:bg-[#dac968] text-black font-medium rounded-md transition-colors whitespace-nowrap"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Property
        </Link>
      </div>
      
      {/* Filters and search */}
      <div className="bg-black border border-gray-800 rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
              <option value="reserved">Reserved</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Listings table */}
      <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Bookings</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredListings.length > 0 ? (
                filteredListings.map(property => (
                  <tr key={property.id} className="hover:bg-gray-900/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-12 w-12 flex-shrink-0 mr-4">
                          <img 
                            src={property.mainImage} 
                            alt={property.title}
                            className="h-12 w-12 rounded-md object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{property.title}</div>
                          <div className="text-xs text-gray-400">
                            {property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''} • {property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{property.location.city}</div>
                      <div className="text-xs text-gray-400">{property.location.country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#f3e17b]">${property.pricing.basePrice}</div>
                      <div className="text-xs text-gray-400">per night</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${property.status === 'active' ? 'bg-green-900/30 text-green-400 border border-green-800' : 
                          property.status === 'pending' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800' : 
                          property.status === 'inactive' ? 'bg-gray-900/30 text-gray-400 border border-gray-800' :
                          'bg-blue-900/30 text-blue-400 border border-blue-800'}`}
                      >
                        {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{property.reviewCount || 0}</div>
                      <div className="text-xs text-gray-400">
                        {property.averageRating ? `${property.averageRating.toFixed(1)} ★` : 'No ratings'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => toggleFeature(property.id)}
                          className={`p-1 rounded ${property.featured ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800' : 'bg-gray-900 text-gray-400 border border-gray-700'}`}
                          title={property.featured ? "Remove from featured" : "Add to featured"}
                        >
                          <Star className="h-4 w-4" />
                        </button>
                        <Link
                          href={`/agent-dashboard/listings/${property.id}`}
                          className="p-1 bg-gray-900 text-gray-400 hover:text-white border border-gray-700 rounded"
                          title="View details"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/agent-dashboard/listings/${property.id}/edit`}
                          className="p-1 bg-gray-900 text-gray-400 hover:text-white border border-gray-700 rounded"
                          title="Edit property"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        {confirmDelete === property.id ? (
                          <div className="flex space-x-1">
                            <button
                              onClick={() => handleDeleteConfirm(property.id)}
                              className="p-1 bg-red-900/30 text-red-400 hover:bg-red-900/50 border border-red-800 rounded"
                              title="Confirm delete"
                            >
                              ✓
                            </button>
                            <button
                              onClick={handleDeleteCancel}
                              className="p-1 bg-gray-900 text-gray-400 hover:text-white border border-gray-700 rounded"
                              title="Cancel delete"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleDeleteClick(property.id)}
                            className="p-1 bg-gray-900 text-gray-400 hover:text-red-400 border border-gray-700 rounded"
                            title="Delete property"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="inline-block animate-spin h-6 w-6 border-4 border-yellow-400 border-t-transparent rounded-full mb-2"></div>
                    <p className="text-gray-500">Loading properties...</p>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
                      <Building className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium text-white">No properties found</h3>
                    <p className="mt-1 text-gray-500">
                      {searchTerm || filterStatus !== 'all' 
                        ? 'Try adjusting your search filters' 
                        : 'Add your first property to get started'}
                    </p>
                    {!searchTerm && filterStatus === 'all' && (
                      <Link 
                        href="/agent-dashboard/add-property"
                        className="mt-4 inline-flex items-center px-4 py-2 bg-[#f3e17b] hover:bg-[#dac968] text-black font-medium rounded-md transition-colors"
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Property
                      </Link>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 