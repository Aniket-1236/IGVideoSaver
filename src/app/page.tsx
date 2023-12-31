import Image from "next/image";

import InstagramForm from "@/components/instagram/InstagramForm";
import { cn } from "@/utils";

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 flex-col items-center gap-8">
      <div
        id="#download"
        className={cn(
          "flex w-full flex-col items-center px-4 py-12 shadow-sm",
          "bg-gradient-to-r from-blue-600 to-purple-600"
        )}
      >
        <h1
          className={cn(
            "py-2 text-center text-2xl font-extrabold text-white sm:text-4xl"
          )}
        >
          Instagram Video Downloader
        </h1>
        <InstagramForm />
        <p className="my-4 text-center text-xs text-gray-200 md:text-sm">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </div>

      <div className="container mx-auto flex w-full flex-col items-center">
        <section id="#features" className="flex w-full flex-col items-center">
          <header className="mb-12 flex w-full flex-col items-center text-center">
            <h2 className="mb-2 text-xl font-bold md:text-3xl">
              How to Download Instagram Video ?
            </h2>
            <p className="text-gray-600">
              IGVideoSaver download Instagram Reels in High Quality
            </p>
          </header>

          <div className="mb-16 flex w-full max-w-3xl flex-col items-center gap-2 md:flex-row md:gap-8">
            <Image
              src="/images/features/download.jpg"
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              alt="instagram"
              className="h-72 w-full flex-shrink-0 object-cover md:w-72 md:rounded-full"
            />
            <div className="w-full px-2">
              <h4 className="mb-2 text-lg font-semibold">
                Paste The Link and Click on Download Button
              </h4>
              <p className="text-sm text-gray-600">
              After clicking the Download button, you will be redirected to a video on another page
              </p>
            </div>
          </div>
          <div className="mb-16 flex w-full max-w-3xl flex-col items-center gap-2 md:flex-row md:gap-8">
            <Image
              src="/images/features/login.jpg"
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              alt="instagram"
              className="h-72 w-full flex-shrink-0 object-cover md:order-2 md:w-72 md:rounded-full"
            />
            <div className="w-full px-2 md:order-1">
              <h4 className="mb-2 text-lg font-semibold">
                Click on Three Dotted Button
              </h4>
            </div>
          </div>
          <div className="flex w-full max-w-3xl flex-col items-center gap-2 md:flex-row md:gap-8">
            <Image
              src="/images/features/share.jpg"
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              alt="instagram"
              className="h-72 w-full flex-shrink-0 object-cover md:w-72 md:rounded-full"
            />
            <div className="w-full px-2">
              <h4 className="mb-2 text-lg font-semibold">
                You Will See Three Options: Click on Download 
              </h4>
              <p className="text-sm text-gray-600">
                Congratulations your download has been started
              </p>
            </div>
          </div>
        </section>

        <section
          id="what-is-ig-downloader"
          className="my-12 flex w-full flex-col items-start px-4 items-center text-center"
        >
          <h2 className="mb-2 text-lg font-semibold md:text-2xl" >
            What is IGVideoSaver
          </h2>
          <p className="text-sm md:text-base" >
            IGVideoSaver, an incredibly versatile tool, grants you the ability
            to effortlessly download videos from Instagram posts and reels. With
            its user-friendly interface and robust functionality, you can
            seamlessly save these captivating videos to your device, ensuring
            you always have access to your favorite Instagram content. This way,
            you can easily share these videos with your friends or enjoy them
            offline at your convenience, offering a delightful and flexible
            Instagram experience tailored to your preferences.
          </p>
        </section>

        
        <section
          id="#why-ig-downloader-is-the-best"
          className="mb-12 flex w-full flex-col items-start px-4 items-center text-center"
        >
          <h2 className="mb-2 text-lg font-semibold md:text-2xl">
            IGVideoSaver - The Best Instagram Video Downloader
          </h2>
          <p className="text-sm md:text-base">
            IGVideoSaver is widely recognized as the premier Instagram video
            downloader in the realm of digital tools and applications. This
            exceptional software distinguishes itself by offering users the
            remarkable ability to effortlessly download videos from both regular
            posts and engaging reels links, enabling you to conveniently save
            these captivating visual moments to your device in the universally
            compatible MP4 format. What sets it apart even further is its
            unwavering commitment to delivering content in the highest quality
            resolution available, ensuring that you can enjoy your downloaded
            videos offline, anytime, and, perhaps most impressively, all of this
            comes at absolutely no cost to you.
          </p>
        </section>

        <section
          id="#can-be-used-on-mobile"
          className="mb-12 flex w-full flex-col items-start px-4 items-center text-center"
        >
          <h2 className="mb-2 text-lg font-semibold md:text-2xl">
            Can I use IGVideoSaver on my iPhone or Android?
          </h2>
          <p className="text-sm md:text-base">
            Certainly, you have the option to utilize the IGVideoSaver
            application right from your smartphone, accessible through any web
            browser of your choice. This convenient feature ensures that you can
            easily access and use IGVideoSaver&apos;s functionality on your
            mobile device, regardless of the browser you prefer to employ for
            this purpose.
          </p>
        </section>

        <section
          id="#can-download-stories"
          className="mb-12 flex w-full flex-col items-start px-4 items-center text-center"
        >
          <h2 className="mb-2 text-lg font-semibold md:text-2xl">
            Can I Download Stories on IGVideoSaver?
          </h2>
          <p className="text-sm md:text-base">
            No, the action of downloading stories on IGVideoSaver is not
            supported by the application due to its inherent limitations, as it
            prioritizes user privacy and adheres to Instagram policies and
            security measures.
          </p>
        </section>
      </div>
    </main>
  );
}
