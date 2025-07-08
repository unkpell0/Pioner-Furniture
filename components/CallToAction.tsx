
import React from 'react';
import { PencilSquareIcon } from './icons/PencilSquareIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';
import { UsersIcon } from './icons/UsersIcon';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 text-brand-amber mt-1">{icon}</div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-brand-brown-dark">{title}</h4>
      <p className="text-brand-text leading-relaxed">{description}</p>
    </div>
  </div>
);

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div id="contact" className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
            <div className="space-y-6">
              <FeatureItem
                icon={<PencilSquareIcon className="h-7 w-7" />}
                title="Desain Sesuai Keinginan"
                description="Bebas menentukan bentuk, ukuran, dan detail sesuai imajinasi Anda."
              />
              <FeatureItem
                icon={<CheckBadgeIcon className="h-7 w-7" />}
                title="Kualitas Kayu Pilihan"
                description="Pilihan kayu jati, mahoni, atau jenis lain sesuai pesanan untuk hasil terbaik."
              />
              <FeatureItem
                icon={<UsersIcon className="h-7 w-7" />}
                title="Pengrajin Jepara Berpengalaman"
                description="Keahlian seni ukir turun-temurun memastikan setiap detail dikerjakan dengan sempurna."
              />
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/6285741325563?text=Halo%2C%20saya%20tertarik%20dengan%20furnitur%20kustom%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-brown hover:bg-brand-brown-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
              >
                Hubungi Kami Untuk Info Lebih Lanjut!
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default CallToAction;