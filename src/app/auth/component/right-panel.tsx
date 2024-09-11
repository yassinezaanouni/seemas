import Image from "next/image";

export const RightPanel = () => (
  <div className="bg-primary-light relative flex-[0.6] overflow-hidden rounded-[2rem] pt-8">
    <div className="absolute bottom-0">
      <TagImages />
      <Image
        src="/images/login/dashboard.webp"
        alt="dashboard"
        width={1217}
        height={760}
      />
    </div>
    <CardImages />
  </div>
);

// components/TagImages.js
const TagImages = () => (
  <div className="translate-x-[5%]">
    <div className="flex">
      <Image
        src="/images/login/tag-1.png"
        alt="Seemas"
        width={327}
        height={56}
      />
      <Image
        src="/images/login/tag-2.png"
        alt="Seemas"
        width={156}
        height={56}
      />
    </div>
    <div className="flex translate-x-1/4">
      <Image
        src="/images/login/tag-3.png"
        alt="Seemas"
        width={289}
        height={56}
      />
      <Image
        src="/images/login/tag-4.png"
        alt="Seemas"
        width={251}
        height={56}
      />
    </div>
  </div>
);

// components/CardImages.js
const CardImages = () => (
  <>
    <Image
      src="/images/login/card-2.png"
      alt="Seemas"
      width={409}
      height={174}
      className="absolute bottom-1 translate-x-[20%]"
    />
    <Image
      src="/images/login/card-1.png"
      alt="Seemas"
      width={202}
      height={174}
      className="absolute bottom-28"
    />
  </>
);
