import Image from "next/image";
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.998 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.236 2.686.236v2.962H15.83c-1.491 0-1.956.93-1.956 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.071 24 18.092 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 6.3A5.7 5.7 0 1 1 6.3 12 5.7 5.7 0 0 1 12 6.3Zm0 1.8A3.9 3.9 0 1 0 15.9 12 3.9 3.9 0 0 0 12 8.1Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM2.75 9h4.46v12H2.75V9Zm7.13 0h4.27v1.64h.06c.59-1.12 2.05-2.3 4.23-2.3 4.52 0 5.36 2.98 5.36 6.85V21h-4.45v-5.14c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73V21H9.88V9Z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12.8 19.8 19.8 0 0 1 2.08 4.16 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.63a16 16 0 0 0 6.37 6.37l1.18-1.23a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Sellerova/61575475633775/",
    label: "@sellerova",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaYnz8Oy9Q3alpd0RnLq2Uw%3D%3D",
    label: "@sellerova",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/seller.ova/",
    label: "@sellerova",
    icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a] mt-20">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="footer-logo">
              <Image
                src="/images/sellerova-logo.png"
                alt="Sellerova Logo"
                width={180}
                height={60}
                className="h-[50px] w-auto object-contain"
                priority
              />
            </div>

            <p className="mt-4 max-w-md text-gray-400 leading-7 text-base md:text-lg">
              We help Amazon brands grow with clear execution, stronger PPC
              decisions, and performance-focused scaling strategies.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold">Contact</h4>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+13252023203"
                className="footer-link-group"
                aria-label="Call Sellerova"
              >
                <span className="footer-icon-wrap">
                  <PhoneIcon className="footer-icon" />
                </span>
                <span>+1 325 202 3203</span>
              </a>

              <a
                href="https://maps.google.com/?q=634 E 320 S, Lehi, UT 84043, USA"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-group"
                aria-label="Open Sellerova address in Google Maps"
              >
                <span className="footer-icon-wrap">
                  <MapPinIcon className="footer-icon" />
                </span>
                <span>634 E 320 S, Lehi, UT 84043, USA</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold">Follow Us</h4>

            <div className="mt-5 space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="footer-link-group"
                    aria-label={`Visit Sellerova on ${item.name}`}
                  >
                    <span className="footer-icon-wrap">
                      <Icon className="footer-icon" />
                    </span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#262626] pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            © 2026 Sellerova. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built for performance. Designed for trust.
          </p>
        </div>
      </div>
    </footer>
  );
}