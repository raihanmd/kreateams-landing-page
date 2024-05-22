"use client";

import Image from "next/image";

const SPONSORS = [
  "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png",
  "https://indomaret.co.id/Assets/image/logo.png",
  "https://a.m.dana.id/resource/danaweb-v2/logo-dana.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_of_Ministry_of_Communication_and_Information_Technology_of_the_Republic_of_Indonesia.svg",
  "https://www.gotocompany.com/_next/static/media/logo-gojek-white.42450bc0.png",
  "https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg",
  "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Header%20dan%20Hero/logo%20RG.svg",
  "https://drive.alkademi.id/v1/upload/themes/static/assets/img/logos/alkademi-dark.png",
];

export default function Sponsor() {
  return (
    <div
      className="flex flex-col gap-8 overflow-hidden bg-slate-800 py-20"
      id="sponsors"
    >
      <div className="container text-white">
        <h2 className="text-8xl">SPONSORS -----</h2>
      </div>
      <div className="relative flex gap-4 [--webkit-mask:_linear-gradient(90deg,_transparent,_theme(colors.primary-dark)_20%,_theme(colors.primary-darker)_80%,_transparent)] [mask:_linear-gradient(90deg,_transparent,_theme(colors.primary-dark)_20%,_theme(colors.primary-darker)_80%,_transparent)]">
        <div className="animate-scroll flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-5">
              {SPONSORS.map((logo, index) => (
                <div
                  key={index}
                  className="mx-2 flex h-[100px] w-[150px] items-center justify-center"
                >
                  <Image
                    draggable={false}
                    width={400}
                    height={200}
                    src={logo}
                    alt={`Sponsor ${index}`}
                    className="h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
