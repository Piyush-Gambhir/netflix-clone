import Image from "next/image";

import EmailInput from "@/components/landing/email-input";
import LandingHeader from "@/components/landing/landing-header";
import LandingSection from "@/components/landing/landing-section";
import FAQSection from "@/components/landing/faq-section";
import LandingFooter from "@/components/landing/landing-footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-2">
      <section className="h-full min-h-[32rem] lg:min-h-[43.75rem] flex items-center bg-[url(/images/auth-bg.jpg)] bg-cover">
        <div className="h-[calc(100%-2.5rem)] w-full z-0 absolute top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.5)] to-[rgb(0,0,0,0.9)]"></div>
        <div className="z-10 w-full absolute top-0">
          <LandingHeader />
        </div>
        <div className="z-10 mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem) lg:max-w-[calc(83.333%-6rem)] 2xl:max-w-[calc(66.333%-6rem)] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl lg:text-5xl font-[900] text-center">
              Laughter. Tears. Thrills. Find it all on Netflix.
            </h1>
            <p className="text-lg lg:text-2xl mt-4 text-center">
              Endless entertainment starts at just ₹149. Cancel anytime.
            </p>
            <EmailInput />
          </div>
        </div>
      </section>
      <LandingSection className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col justify-center basis-1/2">
          <h1 className="text-3xl lg:text-5xl font-[900]">Enjoy on your TV</h1>
          <p className="text-lg lg:text-2xl mt-4 text-wrap">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative basis-1/2">
          <Image
            src="/images/landing/tv.png"
            alt="Background Image"
            width={600}
            height={400}
            className="h-full w-full"
          />
          <div className="absolute top-[21%] left-[6%] h-full w-full max-h-[48%] max-w-[34%] ">
            <video
              className="object-contain inline-block overflow-clip"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </LandingSection>
      <LandingSection className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="md:order-2 flex flex-col justify-center basis-1/2">
          <h1 className="text-3xl lg:text-5xl font-[900]">
            Download your shows to watch offline
          </h1>
          <p className="text-lg lg:text-2xl mt-4 text-wrap">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="md:order-1 basis-1/2 relative">
          <Image
            src="/images/landing/mobile.jpg"
            alt="Background Image"
            width={600}
            height={400}
            className="w-full h-full"
          />
          <div className="absolute left-[20%] bottom-[10%] my-auto bg-black flex flex-row justify-between min-w-[15rem] w-[60%] border-2 border-gray-600 rounded-md p-2 overflow-clip items-center">
            <div className="">
              <Image
                alt=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                width={48}
                height={72}
                className="h-[3rem] sm:h-[4rem] md:h-[4.5rem] lg:h-[5rem]"
              />
            </div>
            <div className="flex flex-col justify-center mx-auto max-w-[calc(100%-3rem)]">
              <div id="" className="text-base leading-4">
                Stranger Things
              </div>
              <div id="" className="text-sm text-[#0071eb] leading-4">
                Downloading...
              </div>
            </div>
            <Image
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              width={24}
              height={24}
              className="w-10 h-10"
            />
          </div>
        </div>
      </LandingSection>
      <LandingSection className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col justify-center basis-1/2">
          <h1 className="text-3xl lg:text-5xl font-[900]">Watch everywhere</h1>
          <p className="text-lg lg:text-2xl mt-4 text-wrap">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="basis-1/2 relative">
          <Image
            src="/images/landing/device-pile-in.png"
            alt="Background Image"
            width={600}
            height={400}
            className="w-full h-full bg-transparent"
          />
          <div className="-z-10 bg-transparent overflow-hidden absolute top-[14%] left-[24%] h-full w-full max-h-[70%] max-w-[48%]">
            <video
              className="object-contain inline-block overflow-clip"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </LandingSection>
      <LandingSection className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="md:order-2 flex flex-col justify-center basis-1/2">
          <h1 className="text-3xl lg:text-5xl font-[900]">
            Create profiles for kids
          </h1>
          <p className="text-lg lg:text-2xl mt-4 text-wrap">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div className="md:order-1 basis-1/2 relative">
          <Image
            src="/images/landing/children.png"
            alt="Background Image"
            width={600}
            height={400}
            objectFit="cover"
            quality={100}
            className="object-cover w-full h-full"
          />
        </div>
      </LandingSection>
      <FAQSection />
      <LandingFooter />
    </main>
  );
}
